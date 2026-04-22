import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-950 text-white overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-30 blur-[150px] top-[-100px] left-[-100px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center px-6">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          🚀 Smart Taxi Fare Predictor
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Predict taxi fares instantly using Machine Learning
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/predict"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition transform shadow-lg"
          >
            Start Prediction
          </Link>

          <Link
            to="/about"
            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Learn More
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Home;