import React from "react";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import degrees from "../../data/resume/degrees";
import certificates from "../../data/resume/certificates";
import work from "../../data/resume/work";
import { skills } from "../../data/resume/skills";
import projects from "../../data/projects";

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
          Software Engineer with experience in Backend Development (Django REST
          Framework, Flask, FastAPI), seeking full-time Software Developer roles.
        </p>
      </section>

      <section className="education">
        <h2>Education</h2>
        {degrees.map((degree) => (
          <p key={degree.school}>
            <strong>{degree.degree}</strong>, {degree.school}{" "}
            <span>{degree.year}</span>
          </p>
        ))}
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        {skills.map((skill, index) => (
          <span className="skill" key={skill.title}>
            {(index ? ", " : "") + skill.title}
          </span>
        ))}
      </section>

      <section className="experience">
        <h2>Experience</h2>
        {work.map((job) => (
          <div key={job.name}>
            <h3>{job.position}</h3>
            <p>{job.name}</p>
            <ul>
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.title}>
              <strong>{project.title}</strong> - {project.desc}{" "}
              {project.sourceCodeLinks.map((sourceCodeLink) => (
                <a
                  className="link"
                  key={sourceCodeLink.link}
                  href={sourceCodeLink.link}
                >
                  ({sourceCodeLink.linkTitle})
                </a>
              ))}
            </li>
          ))}
        </ul>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          {certificates.map((certificate) => (
            <li key={certificate.title}>
              <a className="certificate-link" href="http://www.google.com"><strong>{certificate.title} <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></strong></a> - {certificate.provider} - Issued {dayjs(certificate.issuedDate).format("MMMM YYYY")}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ResumeForDownload;
