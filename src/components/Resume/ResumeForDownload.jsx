import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Courses from "./Courses";

import courses from "../../data/resume/courses";
import degrees from "../../data/resume/degrees";
import certificates from "../../data/resume/certificates";
import work from "../../data/resume/work";
import { skills, categories } from "../../data/resume/skills";

const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Certifications: () => <Certifications data={certificates} />,
  Courses: () => <Courses data={courses} />,
};

const ResumeForDownload = () => {
  return (
    <div className="resume-container">
      <header>
        <h1>Ashutosh Chapagain</h1>
        <p>+977-9861999836 ⋄ Kathmandu, Nepal</p>
        <p>
          <a href="mailto:ashutoshchapagainpro@gmail.com">
            ashutoshchapagainpro@gmail.com
          </a>
        </p>
        <div className="links">
          <a href="https://www.linkedin.com/in/ashutosh-chapagain-304a73252/">
            LinkedIn
          </a>{" "}
          ⋄<a href="https://github.com/Ashutosh652">GitHub</a> ⋄
          <a href="https://www.ashutoshc.com.np/">Portfolio</a>
        </div>
      </header>

      <section className="summary">
        <h2>Summary</h2>
        <p>
          Software Engineer with 1 year of experience in Backend Development
          (Django REST Framework), seeking full-time Software Developer roles.
        </p>
      </section>

      <section className="education">
        <h2>Education</h2>
        <p>
          <strong>Bachelor of Computer Engineering</strong>, Nepal Engineering
          College, Pokhara University <span>2018 - 2023</span>
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Technical Skills:</strong> Django REST Framework, Flask,
            FastAPI, PostgreSQL, Pandas, Numpy, Web Scraping
          </li>
          <li>
            <strong>Soft Skills:</strong> Analytical skills, Time Management
            Skills, Communication, Collaboration
          </li>
          <li>
            <strong>Languages:</strong> Nepali (5/5), English (4.5/5), Hindi
            (3/5), German (1/5)
          </li>
        </ul>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <h3>Backend Developer</h3>
        <p>
          Milo Logic Pvt. Ltd., Kathmandu, Nepal <span>Jan 2024 - Present</span>
        </p>
        <ul>
          <li>
            Developed the Backend for a SaaS system for internal use and to sell
            as a product.
          </li>
          <li>
            Developed a web scraping system using Selenium for AI training data.
          </li>
          <li>
            Created a tool to rank resumes using spaCy and NLTK based on job
            descriptions.
          </li>
          <li>Deployed proof-of-concept APIs using FastAPI on a VPS.</li>
        </ul>

        <h3>Python Developer</h3>
        <p>
          Tech Temple, Kathmandu, Nepal <span>Oct 2023 - Jan 2024</span>
        </p>
        <ul>
          <li>
            Developed a CMS template using Flask for quicker project
            development.
          </li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Crop Production Prediction</strong> - Predict crop
            production in Nepal using Django and React. [GitHub]
          </li>
          <li>
            <strong>RamroBazar</strong> - C2C e-commerce site using Django and
            React. [GitHub]
          </li>
          <li>
            <strong>HealthPoint</strong> - Social media app for health posts and
            doctor appointments using Django. [GitHub]
          </li>
        </ul>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>
            <strong>Neural Networks and Deep Learning</strong> - DeepLearning.AI
            (Apr 2024)
          </li>
          <li>
            <strong>Machine Learning Specialization</strong> - DeepLearning.AI
            (Dec 2023)
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ResumeForDownload;
