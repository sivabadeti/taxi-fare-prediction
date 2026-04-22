import joblib
import numpy as np
from datetime import datetime

model = joblib.load("model.pkl")
ohe_color = joblib.load("ohe_color.pkl")
ohe_pickup = joblib.load("ohe_pickup.pkl")
ohe_dropoff = joblib.load("ohe_dropoff.pkl")

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