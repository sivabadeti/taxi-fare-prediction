import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 flex items-center justify-center px-6">

      <div className="max-w-2xl w-full">

        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-6">
          About
        </h1>

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-8">
          This project is a Taxi Fare Prediction system built using Machine Learning.
          It estimates the fare based on trip details such as distance, passengers,
          pickup time, and location.
        </p>

        {/* Technology */}
        <div className="mb-6">
          <h2 className="text-xl text-white font-semibold mb-2">
            Technology
          </h2>
          <p className="leading-relaxed">
            Built using Scikit-learn for the ML model and React for the frontend.
            The system processes user input and predicts fares in real-time.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl text-white font-semibold mb-2">
            Contact
          </h2>

          <p className="mb-2">
            Email:
            <a
              href="mailto:sivabadeti2005@gmail.com"
              className="ml-2 text-indigo-400 hover:text-indigo-300"
            >
              sivabadeti2005@gmail.com
            </a>
          </p>

          <p className="mb-2">
            Phone: <span className="text-white">+91 7013419797</span>
          </p>

          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/sivabadeti-25b35534b"
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-indigo-400 hover:text-indigo-300"
            >
              View Profile
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;