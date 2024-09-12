import React from "react";
import Main from "../layouts/Main";
import Personal from "../components/Stats/Personal";
import { Link } from "react-router-dom";

const Stats = () => (
  <Main title="Stats" description="Some statistics about Ashutosh Chapagain.">
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
    </article>
  </Main>
)

export default Stats;
