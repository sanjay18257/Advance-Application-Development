import React, { useState } from "react";
import User from "./User.jsx";
import "./user.css";

function UserEnrollCourse() {
  const [courseDetails, setCourseDetails] = useState({
    courseName: "",
    courseDuration: "",
    courseTiming: "",
    numberOfStudents: "",
    courseDescription: ""
  });

  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = { ...courseDetails };
    setCourses((prevCourses) => [...prevCourses, newCourse]);
    setCourseDetails({
      courseName: "",
      courseDuration: "",
      courseTiming: "",
      numberOfStudents: "",
      courseDescription: ""
    });
    setShowForm(false);
  };

  return (
    <div>
      <User />
      <div className="course-container">
        {!showForm ? (
          <div className="bfr-adding">
            <button className="add-btn" onClick={() => setShowForm(true)}>
              Enroll Course
            </button>
          </div>
        ) : (
          <div className="course-form">
            <h2>Add New Course</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="courseName">Course Name:</label>
                <input
                  type="text"
                  id="courseName"
                  name="courseName"
                  value={courseDetails.courseName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="courseDuration">Course Duration:</label>
                <input
                  type="text"
                  id="courseDuration"
                  name="courseDuration"
                  value={courseDetails.courseDuration}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="courseTiming">Course Timing:</label>
                <input
                  type="text"
                  id="courseTiming"
                  name="courseTiming"
                  value={courseDetails.courseTiming}
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
                <label htmlFor="courseDescription">Course Description:</label>
                <textarea
                  id="courseDescription"
                  name="courseDescription"
                  value={courseDetails.courseDescription}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Enroll</button>
            </form>
          </div>
        )}
      </div>
      <div>
        <div className="course-div">
          {" "}
          <h2 className="enrolled-courses">Enrolled Courses:</h2>
        </div>

        <div className="course-list">
          {courses.map((course, index) => (
            <div key={index} className="course-item">
              <h3>{course.courseName}</h3>
              <p>
                <strong>Duration:</strong> {course.courseDuration}
              </p>
              <p>
                <strong>Timing:</strong> {course.courseTiming}
              </p>
              <p>
                <strong>Students Enrolled:</strong> {course.numberOfStudents}
              </p>
              <p>
                <strong>Description:</strong> {course.courseDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserEnrollCourse;
