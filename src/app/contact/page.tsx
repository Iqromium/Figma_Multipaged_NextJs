"use client"; // If using App Router

import { useState } from "react";

export default function ContactPage() {
  // State for form submission
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      {/* Contact Us Form */}
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-lg mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">Feel free to reach out to us!</p>

        {submitted ? (
          <p className="text-green-600 font-semibold">✅ Message Sent! We’ll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Feedback Section */}
      <div className="w-full max-w-2xl bg-white p-8 mt-10 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Feedback</h2>

        {/* Fake Feedback List */}
        <div className="space-y-6">
          {feedbackData.map((feedback, index) => (
            <div key={index} className="border-b pb-4">
              <p className="font-semibold text-gray-800">{feedback.name}</p>
              <div className="flex space-x-1 text-yellow-500">{renderStars(feedback.rating)}</div>
              <p className="text-gray-600 mt-2">{feedback.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Fake Feedback Data
const feedbackData = [
  { name: "Farza Khan", rating: 5, comment: "Amazing Platform! Just Enjoyed watching 'Ju-On', no ads, great price and high quality print." },
  { name: "Tariq Shaikh", rating: 4, comment: "Good experience, I watched 'Dracula' and also got lifetime access for it that too just for $20." },
  { name: "Bashir Malik", rating: 5, comment: "Absolutely loved the collection!" },
  { name: "Nabeeha Farooq", rating: 3, comment: "Decent quality, but we need more variety, keep it coming!" },
  { name: "Haroon Baloch", rating: 4, comment: "Nice work! I just finished watching 'Silence of the Lambs', will watch some interesting movie again!" },
];

// Function to Render Stars
const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span key={i}>{i < rating ? "★" : "☆"}</span>
  ));
};
