import React, { useState, useMemo } from 'react';
import './index.css'

export default function EventRSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendees: 1,
    dietary: "",
    bringingGuests: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid";
    }

    if (!formData.attendees || formData.attendees < 1) {
      newErrors.attendees = "Must have at least one attendee";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto", fontFamily: "Arial" }}>
      <h1>Event Registration</h1>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>
            Number of Attendees:
            <input
              type="number"
              name="attendees"
              min="1"
              value={formData.attendees}
              onChange={handleChange}
              required
            />
          </label>
          {errors.attendees && (
            <p style={{ color: "red" }}>{errors.attendees}</p>
          )}
        </div>

        <div>
          <label>
            Dietary Preferences:
            <input
              type="number"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              placeholder="Optional"
            />
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="bringingGuests"
              checked={formData.bringingGuests}
              onChange={handleChange}
            />
            Bringing additional guests?
          </label>
        </div>

        <button type="submit">Submit Registration</button>
      </form>

      {submitted && (
        <div sytle={{ marginTop: "2rem" }}>
          <h2>Registration Confirmed 🎉</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Attendees:</strong> {formData.attendees}</p>
          <p>
            <strong>Dietary Preferences:</strong>{" "}
            {formData.dietary || "None"}
          </p>
          <p>
            <strong>Additional Guests:</strong>{" "}
            {formData.bringingGuests ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}
