import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const Certificate = ({
  data: { title, provider, issuedDate, credentialId, skills, url },
}) => (
  <article className="certificate-container">
    <header>
      <h4>
        <a href={url}>{title}</a>
      </h4>
    </header>
    <div className="body">
      <div className="subtitle">
        {provider} &#x2022; Issued {dayjs(issuedDate).format("MMMM YYYY")}
      </div>
      <div className="content"><p>
        {credentialId ? <>Credential ID:{credentialId}</> : null}
        <br />
      {skills ? (
        <>
          Skills:{" "}
          {skills.map(
            (skill, index) =>
              `${skill}${index !== skills.length - 1 ? " • " : ""}`
          )}
          </>
        ) : null}
      </p>
      </div>
    </div>
  </article>
);

Certificate.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
    issuedDate: PropTypes.string.isRequired,
    credentialId: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Certificate;
