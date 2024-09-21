import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons/faArrowAltCircleDown";

import html2pdf from "html2pdf.js";

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

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Certifications: () => <Certifications data={certificates} />,
  Courses: () => <Courses data={courses} />,
};

const Resume = () => {
  const pdfRef = useRef();

  const downloadPDF = () => {
    const element = pdfRef.current;
    const opt = {
      margin: 10,
      filename: 'AshutoshChapagainResume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <Main
      title="Resume"
      description="Ashutosh Chapagain's Resume. Milo Logic and Tech Temple"
    >
      <div className="download-button">
        <button onClick={downloadPDF}>
          <FontAwesomeIcon icon={faArrowAltCircleDown} /> Download PDF
        </button>
      </div>
      <article className="post" id="resume" ref={pdfRef}>
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
