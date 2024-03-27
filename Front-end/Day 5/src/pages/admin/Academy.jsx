import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./admin.css";
import Modal from "./Modal"; // Corrected import

const Academy = () => {
  const [academyDetails, setAcademyDetails] = useState({
    name: "",
    location: "",
    email: "",
    contactNumber: "",
    imageUrl: "",
  });

  const [academies, setAcademies] = useState([]);
  const [showModal, setShowModal] = useState(false);
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
    setShowModal(false); // Close the modal after submitting the form
  };

  const handleEdit = (index) => {
    setAcademyDetails(academies[index]);
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const updatedAcademies = [...academies];
    updatedAcademies.splice(index, 1);
    setAcademies(updatedAcademies);
  };

  return (
    <div className="academy-container">
      <div className="academy-header">
        <Header />
      </div>
      <div className="academy-content">
        <h2 className="added-academy">Added Academies:</h2>

        <div className="academy-card">
          <div className="academy-btn-div">
            <button className="add-btn" onClick={() => setShowModal(true)}>
              Add Academy
            </button>
          </div>
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
      

        {showModal && (
          <Modal closeModal={() => setShowModal(false)}>
            {/* <h2>{editIndex !== null ? "Edit Academy" : "Add New Academy"}</h2> */}
            <form className="form-f" onSubmit={handleSubmit}>
              <div className="form-div">
                <label htmlFor="name">Academy Name:</label>
                <br />
                <input
                  className="academy-input"
                  type="text"
                  id="name"
                  name="name"
                  value={academyDetails.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-div">
                <label htmlFor="location">Location:</label>
                <br />
                <input
                  className="academy-input"
                  type="text"
                  id="location"
                  name="location"
                  value={academyDetails.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-div">
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  className="academy-input"
                  type="email"
                  id="email"
                  name="email"
                  value={academyDetails.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-div">
                <label htmlFor="contactNumber">Contact Number:</label>
                <br />
                <input
                  className="academy-input"
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  value={academyDetails.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-div">
                <label htmlFor="imageUrl">Image URL:</label>
                <br />
                <input
                  className="academy-input"
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={academyDetails.imageUrl}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="frm-smt" type="submit">
                {editIndex !== null ? "Update" : "Add"}
              </button>
            </form>
          </Modal>
        )}
      </div>
      <Sidebar />
    </div>
  );
};

export default Academy;
