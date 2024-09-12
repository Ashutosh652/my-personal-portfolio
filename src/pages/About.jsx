import React from "react";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";

import Main from "../layouts/Main";
import aboutText from "../data/about.md";

const About = () => {
  const count = aboutText
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ""))
    .filter((s) => s.length).length;

  return (
    <Main title="About" description="Learn about Ashutosh Chapagain">
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">About Me</Link>
            </h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown>{aboutText}</Markdown>
      </article>
    </Main>
  );
};

export default About;
