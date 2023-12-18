import React from "react";
import "./Home_style.css";
import { Link } from "react-router-dom";
import About_us_home from "../component/about_us_home/about_us_home";
import Services from "../component/services/services";

export default function Home() {
  return (
    <div className="home_main_contaner">
      <div className="header">
        <div className="header_text">
          <h1 className="header_title">
            Making Your Home Beautiful, Inside & Out
          </h1>
          <p className="header_paragraph">
            Welcome to Behsud Painting Company – where brushstrokes meet
            brilliance! Transforming spaces into art is our passion. Elevate
            your surroundings with us.
          </p>
          <div className="header_buttons">
            <Link to={"contact"}>
              <a href="#" className="button header_contact">
                Contact
              </a>
            </Link>

            <a href="#" className="button header_services">
              Services
            </a>
          </div>
        </div>
      </div>

      <div className="center_1300">
        <About_us_home />
        <Services />
      </div>
    </div>
  );
}
