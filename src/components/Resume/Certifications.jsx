import React from "react";
import Certificate from "./Certifications/Certificate";

const Certifications = ({ data = [] }) => (
  <div className="certifications">
    <div className="link-to" id="certifications" />
    <div className="title">
      <h3>Certifications</h3>
    </div>
    {data.map((certificate) => (
      <Certificate data={certificate} key={certificate.title} />
    ))}
  </div>
);

export default Certifications;
