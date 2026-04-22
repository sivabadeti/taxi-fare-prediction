import { useState } from "react";

function Predict() {
  const [form, setForm] = useState({
    passengers: "",
    distance: "",
    pickup: "",
    color: "yellow",
    pickup_borough: "Manhattan",
    dropoff_borough: "Manhattan"
  });

  const [fare, setFare] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.passengers || !form.distance || !form.pickup) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        passengers: Number(form.passengers),
        distance: Number(form.distance),
        pickup: form.pickup,
        color: form.color,
        pickup_borough: form.pickup_borough,
        dropoff_borough: form.dropoff_borough
      };

      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (data.error) {
        alert(data.error);
      } else {
        setFare(data.fare);
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* LEFT: FORM */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Enter Trip Details
          </h2>

          <div className="space-y-4">

            {/* Passengers */}
            <div>
              <label className="text-sm text-gray-400">Passengers</label>
              <input
                type="number"
                name="passengers"
                onChange={handleChange}
                className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 rounded-lg"
              />
            </div>

            {/* Distance */}
            <div>
              <label className="text-sm text-gray-400">Distance (km)</label>
              <input
                type="number"
                name="distance"
                onChange={handleChange}
                className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 rounded-lg"
              />
            </div>

            {/* Pickup time */}
            <div>
              <label className="text-sm text-gray-400">Pickup Time</label>
              <input
                type="datetime-local"
                name="pickup"
                onChange={handleChange}
                className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 rounded-lg"
              />
            </div>

            {/* Taxi Color (Dropdown ✅) */}
            <div>
              <label className="text-sm text-gray-400">Taxi Color</label>
              <select
                name="color"
                value={form.color}
                onChange={handleChange}
                className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 rounded-lg"
              >
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
              </select>
            </div>

            {/* Pickup Borough (Dropdown ✅) */}
            <div>
              <label className="text-sm text-gray-400">Pickup Borough</label>
              <select
                name="pickup_borough"
                value={form.pickup_borough}
                onChange={handleChange}
                className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 rounded-lg"
              >
                <option value="Manhattan">Manhattan</option>
                <option value="Brooklyn">Brooklyn</option>
                <option value="Queens">Queens</option>
                <option value="Bronx">Bronx</option>
                <option value="Staten Island">Staten Island</option>
              </select>
            </div>

            {/* Dropoff Borough (Dropdown ✅) */}
            <div>
              <label className="text-sm text-gray-400">Dropoff Borough</label>
              <select
                name="dropoff_borough"
                value={form.dropoff_borough}
                onChange={handleChange}
                className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 rounded-lg"
              >
                <option value="Manhattan">Manhattan</option>
                <option value="Brooklyn">Brooklyn</option>
                <option value="Queens">Queens</option>
                <option value="Bronx">Bronx</option>
                <option value="Staten Island">Staten Island</option>
              </select>
            </div>

            {/* Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 transition p-3 rounded-lg font-medium disabled:opacity-50"
            >
              {loading ? "Predicting..." : "Predict Fare"}
            </button>

          </div>
        </div>

        {/* RIGHT: RESULT */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-4">
            Prediction
          </h2>

          {fare ? (
            <div className="text-5xl font-bold text-indigo-500">
              ₹ {Number(fare.toFixed(2))}
            </div>
          ) : (
            <p className="text-gray-400">
              Enter details to see prediction
            </p>
          )}
        </div>

      </div>

    </div>
  );
}

export default Predict;