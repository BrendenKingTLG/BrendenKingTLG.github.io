"use client";
import React, { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    from: "",
    textBody: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setMessage(result.message);
    } catch (error: any) {
      setMessage("Failed to send email: " + error.message);
    }
  };

  return (
    <div className="lg:mx-60 border-2 mt-5 p-5 shadow-lg rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Your email address"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message:
          </label>
          <textarea
            name="textBody"
            value={formData.textBody}
            onChange={handleChange}
            className="textarea textarea-bordered w-full min-h-[120px]"
            placeholder="Write your message here"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Send Email
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
