import React, { useState } from "react";
import Admin from "./Admin";
import "./admin.css";

function AdminAcademyForm() {
  const [academyDetails, setAcademyDetails] = useState({
    name: "",
    location: "",
    email: "",
    contactNumber: "",
    imageUrl: "",
  });

  const [academies, setAcademies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAcademyDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // If editing an existing academy
      const updatedAcademies = [...academies];
      updatedAcademies[editIndex] = { ...academyDetails };
      setAcademies(updatedAcademies);
      setEditIndex(null);
    } else {
      // If adding a new academy
      const newAcademy = { ...academyDetails };
      setAcademies((prevAcademies) => [...prevAcademies, newAcademy]);
    }
    setAcademyDetails({
      name: "",
      location: "",
      email: "",
      contactNumber: "",
      imageUrl: "",
    });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setAcademyDetails(academies[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updatedAcademies = [...academies];
    updatedAcademies.splice(index, 1);
    setAcademies(updatedAcademies);
  };

  return (
    <div>
      <Admin />
      <div className="academy-container">
        {!showForm ? (
          <div className="bfr-adding">
            <button className="add-btn" onClick={() => setShowForm(true)}>
              Add Academy
            </button>
          </div>
        ) : (
          <div className="academy-form">
            <h2>{editIndex !== null ? "Edit Academy" : "Add New Academy"}</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={academyDetails.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={academyDetails.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={academyDetails.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="contactNumber">Contact Number:</label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  value={academyDetails.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="imageUrl">Image URL:</label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={academyDetails.imageUrl}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">
                {editIndex !== null ? "Update" : "Submit"}
              </button>
            </form>
          </div>
        )}
      </div>
      <div>
        <div className="academy-div">
          {" "}
          <h2 className="added-academy">Added Academies:</h2>
        </div>

        <div className="academy-list">
          {academies.map((academy, index) => (
            <div key={index} className="academy-item">
              <h3>{academy.name}</h3>
              <p>
                <strong>Location:</strong> {academy.location}
              </p>
              <p>
                <strong>Email:</strong> {academy.email}
              </p>
              <p>
                <strong>Contact Number:</strong> {academy.contactNumber}
              </p>
              <img src={academy.imageUrl} alt={academy.name} />
              <div>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminAcademyForm;
