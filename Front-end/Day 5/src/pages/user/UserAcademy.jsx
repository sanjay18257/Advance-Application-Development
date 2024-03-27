import React, { useState } from "react";
import "./user.css"; // Assuming student styles are defined in student.css
import UserNav from "../../components/user/usercomp/UserNav";
// import Modal from "./Modal"; 

const UserAcademy = () => {
  const [academies, setAcademies] = useState([
    {
      id: 1,
      name: "Academy 1",
      location: "Location 1",
      email: "academy1@example.com",
      contactNumber: "1234567890",
      imageUrl: "https://example.com/academy1.jpg",
    },
    {
      id: 2,
      name: "Academy 2",
      location: "Location 2",
      email: "academy2@example.com",
      contactNumber: "0987654321",
      imageUrl: "https://example.com/academy2.jpg",
    },
    // Add more academies as needed
  ]);

  const [enrolledAcademies, setEnrolledAcademies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAcademy, setSelectedAcademy] = useState(null);

  const handleEnroll = (academy) => {
    setEnrolledAcademies((prevEnrolled) => [...prevEnrolled, academy]);
    setShowModal(false);
  };

  return (
    <div className="student-container">
      <div className="student-header">
        <UserNav />
      </div>
      <div className="student-content">
        <h2 className="available-academies">Available Academies:</h2>

        <div className="academy-list">
          {academies.map((academy) => (
            <div key={academy.id} className="academy-item">
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
              <button onClick={() => { setShowModal(true); setSelectedAcademy(academy); }}>Enroll</button>
            </div>
          ))}
        </div>

        <h2 className="enrolled-academies">Enrolled Academies:</h2>

        <div className="enrolled-academy-list">
          {enrolledAcademies.map((academy) => (
            <div key={academy.id} className="enrolled-academy-item">
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
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
          <div>
            <h2>Confirm Enrollment</h2>
            <p>Do you want to enroll in {selectedAcademy.name}?</p>
            <button onClick={() => handleEnroll(selectedAcademy)}>Enroll</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </Modal>
      )}

      
    </div>
  );
};

export default UserAcademy;
