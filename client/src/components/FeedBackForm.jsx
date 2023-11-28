import React, { useState } from "react";
import "./FeedbackForm.css";
import { useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const FeedbackForm = () => {
  const navigator = useNavigate();
  const [tripId, setTripId] = useState("");
  const [driverId, setDriverId] = useState("");
  const [tripRating, setTripRating] = useState(0);
  const [driverRating, setDriverRating] = useState(0);
  const [optionalQuestion1, setOptionalQuestion1] = useState("");
  const [optionalQuestion2, setOptionalQuestion2] = useState("");

  // Retrieve userId from session storage
  //const userId = sessionStorage.getItem('userId');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a feedback object with the form data
    const feedbackData = {
      tripId,
      driverId,
      tripRating,
      driverRating,
      optionslQuestions: [optionalQuestion1, optionalQuestion2],
    };

    try {
      // Send a POST request to the feedback API endpoint
      const response = await fetch("http://localhost:8080/api/postfeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        console.log("Feedback submitted successfully");

        // You can reset the form state if needed
        setTripId("");
        setDriverId("");
        setTripRating(0);
        setDriverRating(0);
        setOptionalQuestion1("");
        setOptionalQuestion2("");
        navigator("/Success");
      } else {
        console.error("Failed to submit feedback");
        // Handle error scenarios
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network errors or other exceptions
    }
  };

  return (
    <div className="feedback-form">
      <h2>Trip Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Trip ID:</label>
          <input
            type="text"
            value={tripId}
            onChange={(e) => setTripId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Driver ID:</label>
          <input
            type="text"
            value={driverId}
            onChange={(e) => setDriverId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Trip Rating:</label>
          <input
            type="number"
            min="1"
            max="10"
            value={tripRating}
            onChange={(e) => setTripRating(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Driver Rating:</label>
          <input
            type="number"
            min="1"
            max="10"
            value={driverRating}
            onChange={(e) => setDriverRating(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Optional Question 1:</label>
          <input
            type="text"
            value={optionalQuestion1}
            onChange={(e) => setOptionalQuestion1(e.target.value)}
          />
        </div>
        <div>
          <label>Optional Question 2:</label>
          <input
            type="text"
            value={optionalQuestion2}
            onChange={(e) => setOptionalQuestion2(e.target.value)}
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
