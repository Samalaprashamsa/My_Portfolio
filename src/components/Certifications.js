import React from 'react';
import './Certifications.css';

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <h2 className="certifications-heading">Courses & Certifications</h2>
        <ul className="certifications-list">
          <li className="certification-item">
            <div className="certification-icon">&#10003;</div>
            <div className="certification-details">
              <p>Data Analytics Course by Krutanic Solutions, powered by Wipro</p>
            </div>
          </li>
          <li className="certification-item">
            <div className="certification-icon">&#10003;</div>
            <div className="certification-details">
              <p>Big Data Visual Analytics &ndash; IIT Kanpur</p>
            </div>
          </li>
          <li className="certification-item">
            <div className="certification-icon">&#10003;</div>
            <div className="certification-details">
              <p>Image Processing &ndash; IIT Kanpur</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Certifications;
