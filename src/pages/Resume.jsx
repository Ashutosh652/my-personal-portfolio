import React from "react";
import { Link } from "react-router-dom";

import { PDFDownloadLink } from "@react-pdf/renderer";

import Main from "../layouts/Main";

import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
import Skills from "../components/Resume/Skills";
import Certifications from "../components/Resume/Certifications";
import Courses from "../components/Resume/Courses";

import courses from "../data/resume/courses";
import degrees from "../data/resume/degrees";
import certificates from "../data/resume/certificates";
import work from "../data/resume/work";
import { skills, categories } from "../data/resume/skills";

import CV from "./CV";

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Certifications: () => <Certifications data={certificates} />,
  Courses: () => <Courses data={courses} />,
};

const Resume = () => {
  return (
    <Main
      title="Resume"
      description="Ashutosh Chapagain's Resume. Milo Logic and Tech Temple"
    >
      <div className="download-button">
        <button>
          <PDFDownloadLink
            document={<CV />}
            fileName="AshutoshChapagainResume.pdf"
          >
            {({ blob, url, loading, error }) => {
              return loading ? "Loading CV..." : "Download CV";
            }}
          </PDFDownloadLink>
        </button>
      </div>

      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2>
              <Link to="/resume">Resume</Link>
            </h2>
            <div className="link-container">
              {Object.keys(sections).map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>
              ))}
            </div>
          </div>
        </header>
        {Object.entries(sections).map(([name, Section]) => (
          <Section key={name} />
        ))}
      </article>
    </Main>
  );
};

export default Resume;
