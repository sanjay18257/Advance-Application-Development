import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./admin.css";
import Modal from "./Modal"; // Corrected import

const Student = () => {
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    email: "",
    contactNumber: "",
    imageUrl: "",
  });

  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // If editing an existing student
      const updatedStudents = [...students];
      updatedStudents[editIndex] = { ...studentDetails };
      setStudents(updatedStudents);
      setEditIndex(null);
    } else {
      // If adding a new student
      const newStudent = { ...studentDetails };
      setStudents((prevStudents) => [...prevStudents, newStudent]);
    }
    setStudentDetails({
      name: "",
      email: "",
      contactNumber: "",
      imageUrl: "",
    });
    setShowModal(false); // Close the modal after submitting the form
  };

  const handleEdit = (index) => {
    setStudentDetails(students[index]);
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  return (
    <div className="student-container">
      <div className="student-header">
        <Header />
      </div>
      <div className="student-content">
        <h2 className="added-student">Student List:</h2>

        <div className="student-card">
          <div className="student-btn-div">
            <button className="add-btn" onClick={() => setShowModal(true)}>
              Add Student
            </button>
          </div>
        </div>

        <div>
          <div className="student-list">
            {students.map((student, index) => (
              <div key={index} className="student-item">
                <h3>{student.name}</h3>
                <p>
                  <strong>Email:</strong> {student.email}
                </p>
                <p>
                  <strong>Contact Number:</strong> {student.contactNumber}
                </p>
                <img src={student.imageUrl} alt={student.name} />
                <div>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showModal && (
          <Modal closeModal={() => setShowModal(false)}>
            <form className="form-f" onSubmit={handleSubmit}>
              <div className="form-div">
                <label htmlFor="name">Student Name:</label>
                <br />
                <input
                  className="academy-input"
                  type="text"
                  id="name"
                  name="name"
                  value={studentDetails.name}
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
                  value={studentDetails.email}
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
                  value={studentDetails.contactNumber}
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
                  value={studentDetails.imageUrl}
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

export default Student;
