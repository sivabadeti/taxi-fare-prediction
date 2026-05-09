# NYC Taxi Fare Prediction

## Overview

NYC Taxi Fare Prediction is a Machine Learning-based web application that predicts taxi fares based on trip details such as pickup location, drop location, passenger count, and trip distance. The project combines Machine Learning with a full-stack web application using Flask for the backend and React for the frontend.

The goal of this project is to provide accurate fare estimations using data-driven prediction models while demonstrating practical implementation of ML deployment in a real-world application.

---

## Features

* Predict taxi fares using Machine Learning
* User-friendly React frontend interface
* Flask backend for API handling and model integration
* Data preprocessing and feature engineering
* REST API integration between frontend and backend
* Real-time fare prediction
* Responsive UI design

---

## Tech Stack

### Frontend

* React.js
* HTML
* CSS
* JavaScript

### Backend

* Flask
* Python

### Machine Learning

* Scikit-learn
* Pandas
* NumPy
* Matplotlib
* Seaborn

---

## Machine Learning Workflow

1. Data Collection
2. Data Cleaning and Preprocessing
3. Feature Engineering
4. Model Training
5. Model Evaluation
6. Deployment using Flask API
7. Frontend Integration with React

---

## Dataset

The project uses NYC Taxi Trip data for training the Machine Learning model. The dataset contains trip-related information such as:

* Pickup coordinates
* Drop coordinates
* Passenger count
* Date and time
* Trip distance
* Fare amount

---

## Model Training

The Machine Learning model was trained using Scikit-learn regression algorithms to predict taxi fares based on trip features.

### Steps Performed

* Handled missing values
* Removed outliers
* Performed feature selection
* Trained regression model
* Evaluated model performance

---

## Project Structure

```bash
NYC-Taxi-Fare-Prediction/
│
├── backend/
│   ├── app.py
│   ├── model.pkl
│   ├── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── dataset/
├── notebooks/
├── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/NYC-Taxi-Fare-Prediction.git
cd NYC-Taxi-Fare-Prediction
```

---

## Backend Setup (Flask)

```bash
cd backend
pip install -r requirements.txt
python app.py
```

Backend will run on:

```bash
http://127.0.0.1:5000
```

---

## Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

Frontend will run on:

```bash
http://localhost:3000
```

---

## API Endpoint

### Predict Fare

```http
POST /predict
```

### Sample Request

```json
{
  "passenger_count": 2,
  "trip_distance": 5.4
}
```

### Sample Response

```json
{
  "predicted_fare": 18.75
}
```

---

## Future Improvements

* Improve model accuracy
* Add live map integration
* Deploy using Docker and Cloud services
* Add authentication system
* Support real-time traffic data

---

## Learning Outcomes

Through this project, I gained hands-on experience in:

* Machine Learning model development
* Data preprocessing and visualization
* Flask API development
* React frontend integration
* Full-stack ML application deployment
* REST API communication

---

## Author

Siva Manikanta Badeti
