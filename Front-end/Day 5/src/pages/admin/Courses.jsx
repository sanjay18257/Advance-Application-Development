import React, { useState } from "react";
import Admin from "./Admin";
import "./admin.css";

function Courses() {
  const [courseDetails, setCourseDetails] = useState({
    name: "",
    duration: "",
    availableTiming: "",
    numberOfStudents: "",
    description: "",
  });

  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
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
      name: "",
      duration: "",
      availableTiming: "",
      numberOfStudents: "",
      description: "",
    });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setCourseDetails(courses[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  return (
    <div>
      <Admin />
      <div className="course-container">
        {!showForm ? (
          <div className="bfr-adding">
            <button className="add-btn" onClick={() => setShowForm(true)}>
              Add Course
            </button>
          </div>
        ) : (
          <div className="course-form">
            <h2>{editIndex !== null ? "Edit Course" : "Add New Course"}</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Course Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={courseDetails.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="duration">Duration:</label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={courseDetails.duration}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="availableTiming">Available Timing:</label>
                <input
                  type="text"
                  id="availableTiming"
                  name="availableTiming"
                  value={courseDetails.availableTiming}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="numberOfStudents">Number of Students:</label>
                <input
                  type="text"
                  id="numberOfStudents"
                  name="numberOfStudents"
                  value={courseDetails.numberOfStudents}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={courseDetails.description}
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
        <div className="course-div">
          {" "}
          <h2 className="added-course">Added Courses:</h2>
        </div>

        <div className="course-list">
          {courses.map((course, index) => (
            <div key={index} className="course-item">
              <h3>{course.name}</h3>
              <p>
                <strong>Duration:</strong> {course.duration}
              </p>
              <p>
                <strong>Available Timing:</strong> {course.availableTiming}
              </p>
              <p>
                <strong>Number of Students:</strong> {course.numberOfStudents}
              </p>
              <p>
                <strong>Description:</strong> {course.description}
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

export default Courses;
