import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./admin.css";
import Modal from "./Modal"; // Corrected import

const Courses= () => {
  const [courseDetails, setCourseDetails] = useState({
    title: "",
    description: "",
    instructor: "",
    duration: "",
    imageUrl: "",
  });

  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // If editing an existing course
      const updatedCourses = [...courses];
      updatedCourses[editIndex] = { ...courseDetails };
      setCourses(updatedCourses);
      setEditIndex(null);
    } else {
      // If adding a new course
      const newCourse = { ...courseDetails };
      setCourses((prevCourses) => [...prevCourses, newCourse]);
    }
    setCourseDetails({
      title: "",
      description: "",
      instructor: "",
      duration: "",
      imageUrl: "",
    });
    setShowModal(false); // Close the modal after submitting the form
  };

  const handleEdit = (index) => {
    setCourseDetails(courses[index]);
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  return (
    <div className="course-container">
      <div className="course-header">
        <Header />
      </div>
      <div className="course-content">
        <h2 className="added-academy">Added Courses:</h2>

        <div className="academy-card">
          <div className="academy-btn-div">
            <button className="add-btn" onClick={() => setShowModal(true)}>
              Add Course
            </button>
          </div>
        </div>

        <div>
          <div className="course-list">
            {courses.map((course, index) => (
              <div key={index} className="academy-item">
                <h3>{course.title}</h3>
                <p>
                  <strong>Description:</strong> {course.description}
                </p>
                <p>
                  <strong>Instructor:</strong> {course.instructor}
                </p>
                <p>
                  <strong>Duration:</strong> {course.duration}
                </p>
                <img src={course.imageUrl} alt={course.title} />
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
            <form className="course-form-f" onSubmit={handleSubmit}>
              <div className="form-div">
                <label htmlFor="title">Course Title:</label>
                <br />
                <input
                  className="academy-input"
                  type="text"
                  id="title"
                  name="title"
                  value={courseDetails.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-div">
                <label htmlFor="description">Description:</label>
                <br />
                <textarea
                  className="academy-input"
                  id="description"
                  name="description"
                  value={courseDetails.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-div">
                <label htmlFor="instructor">Instructor:</label>
                <br />
                <input
                  className="academy-input"
                  type="text"
                  id="instructor"
                  name="instructor"
                  value={courseDetails.instructor}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-div">
                <label htmlFor="duration">Duration:</label>
                <br />
                <input
                  className="academy-input"
                  type="text"
                  id="duration"
                  name="duration"
                  value={courseDetails.duration}
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
                  value={courseDetails.imageUrl}
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

export default Courses;
