from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Load models
model = joblib.load("model.pkl")
ohe_color = joblib.load("ohe_color.pkl")
ohe_pickup = joblib.load("ohe_pickup.pkl")   
ohe_dropoff = joblib.load("ohe_dropoff.pkl")
# venv\Scripts\activate
@app.route("/")
def home():
    return "Flask is working 🚀"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    passengers = int(data["passengers"])
    distance = float(data["distance"])

    pickup_time = data["pickup"]
    pickup_dt = datetime.fromisoformat(pickup_time)

    pickup_hour = pickup_dt.hour
    pickup_day = pickup_dt.day
    pickup_dayofweek = pickup_dt.weekday()
    pickup_month = pickup_dt.month

    color = ohe_color.transform([[data["color"]]])
    pickup_b = ohe_pickup.transform([[data["pickup_borough"]]])
    dropoff_b = ohe_dropoff.transform([[data["dropoff_borough"]]])

    features = np.hstack([
        [[passengers, distance]],
        [[pickup_hour, pickup_day, pickup_dayofweek, pickup_month]],
        color,
        pickup_b,
        dropoff_b
    ])

    prediction = model.predict(features)

    return jsonify({"fare": float(prediction[0])})

if __name__ == "__main__":
    app.run(debug=True)