import React from "react";
import logo from "../assets/Logo.png";
import "./Header_style.css";
import { Link } from "react-router-dom";

function windowResize() {
  window.addEventListener("resize", (e) => {
    if (e.srcElement.outerWidth >= 700) {
      document.querySelector(".nav-links").style.display = "block";
    } else {
      document.querySelector(".nav-links").style.display = "none";
      document.querySelector(".menu-open").style.display = "block";
      document.querySelector(".menu-close").style.display = "none";
    }
  });
}

windowResize();

function mOpen() {
  document.querySelector(".menu-open").style.display = "none";
  document.querySelector(".menu-close").style.display = "block";
  document.querySelector(".nav-links").style.display = "block";
}

function mClose() {
  document.querySelector(".menu-open").style.display = "block";
  document.querySelector(".menu-close").style.display = "none";
  document.querySelector(".nav-links").style.display = "none";
}

function navClick(e) {
  if (e.target.localName == "li" && window.innerWidth < 700) mClose();
}

export default function Header() {
  return (
    <div className="main-nav-contaner">
      <div className="nav-bar">
        <div className="nav-first-div">
          <div className="logo-contaner">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="menu">
            <i className="fa-solid fa-bars menu-open" onClick={mOpen}></i>
            <i
              className="fa-solid fa-xmark menu-close hidden"
              onClick={mClose}
            ></i>
          </div>
        </div>

        <div className="nav-links" onClick={navClick}>
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <li className="services">
              <span>
                Services <i className="fa-solid fa-angle-down arrow-down"></i>
              </span>
              <div className="tooltip">
                <ul>
                  <Link to={"commercial"}>
                    <li>Commercial</li>
                  </Link>

                  <Link to={"residential"}>
                    <li>Residential</li>
                  </Link>

                  <Link to={"external"}>
                    <li>External</li>
                  </Link>

                  <Link to={"internal"}>
                    <li>Internal</li>
                  </Link>
                </ul>
              </div>
            </li>
            <Link to={"about"}>
              <li>About</li>
            </Link>
            <Link to={"/contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
