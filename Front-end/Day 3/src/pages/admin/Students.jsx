import React, { useState } from "react";
import Admin from "./Admin";
import "./admin.css";

function Students() {
  const [studentDetails, setStudentDetails] = useState({
    studentId: "",
    studentName: "",
    enrolledCourse: "",
    mobileNumber: "",
  });

  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
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
      studentId: "",
      studentName: "",
      enrolledCourse: "",
      mobileNumber: "",
    });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setStudentDetails(students[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  return (
    <div>
      <Admin />
      <div className="student-container">
        {!showForm ? (
          <div className="bfr-adding">
            <button className="add-btn" onClick={() => setShowForm(true)}>
              Add Student
            </button>
          </div>
        ) : (
          <div className="student-form">
            <h2>{editIndex !== null ? "Edit Student" : "Add New Student"}</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="studentId">Student ID:</label>
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  value={studentDetails.studentId}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="studentName">Student Name:</label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={studentDetails.studentName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="enrolledCourse">Enrolled Course:</label>
                <input
                  type="text"
                  id="enrolledCourse"
                  name="enrolledCourse"
                  value={studentDetails.enrolledCourse}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={studentDetails.mobileNumber}
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
        <div className="student-div">
          {" "}
          <h2 className="added-student">Added Students:</h2>
        </div>

        <div className="student-list">
          {students.map((student, index) => (
            <div key={index} className="student-item">
              <h3>{student.studentName}</h3>
              <p>
                <strong>Student ID:</strong> {student.studentId}
              </p>
              <p>
                <strong>Enrolled Course:</strong> {student.enrolledCourse}
              </p>
              <p>
                <strong>Mobile Number:</strong> {student.mobileNumber}
              </p>
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

export default Students;
