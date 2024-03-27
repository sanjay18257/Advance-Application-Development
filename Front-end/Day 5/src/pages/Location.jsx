import React from "react";
import "../../src/App.css";
const Location = () => {
  return (
    <div>
      kadioasod
      <div className="location"></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15669.50872611209!2d76.92972415!3d10.934854499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711448941785!5m2!1sen!2sin"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
