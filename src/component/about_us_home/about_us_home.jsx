import React from "react";
import "./About_us_home_style.css";
import { Link } from "react-router-dom";

export default function About_us_home() {
  return (
    <div className="about-us-main">
      <div className="about-us-image"></div>

      <div className="about-us-text">
        <div className="text-content">
          <h3>About Us</h3>
          <h1>Who We Are</h1>
          <p>
            At Behsud Painting Company, our mission is simple – to breathe life
            into every wall we touch. We believe in the power of color to evoke
            emotions and create lasting impressions. Whether it's a cozy home or
            a dynamic commercial space, our skilled team is dedicated to
            delivering excellence in every stroke.
          </p>
          <Link to={"about"}>
            <a href="#" className="button about-us-btn">
              About Us
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
