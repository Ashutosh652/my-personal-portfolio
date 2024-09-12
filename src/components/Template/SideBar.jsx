import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ashutosh Chapagain</h2>
        <p>
          <a href="mailto:ashutoshchapagainpro@gmail.com">
            ashutoshchapagainpro@gmail.com
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Ashutosh. I am a Computer Engineering graduate from{" "}
        <a href="https://pu.edu.np/">Pokhara University.</a>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Ashutosh Chapagain <Link to="/">ashutoshc.com.np</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
