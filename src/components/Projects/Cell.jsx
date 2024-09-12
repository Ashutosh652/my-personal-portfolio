import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.link}>{data.title}</a>
        </h3>
        <time className="published">
          {dayjs(data.date).format("MMMM, YYYY")}
        </time>
        <div className="sourceCodeLinks">
          <p>
            |{" "}
            {data.sourceCodeLinks &&
              data.sourceCodeLinks.map((source) => (
                <React.Fragment key={source.link}>
                  <a href={source.link} target="_blank" rel="noreferrer">
                    {source.linkTitle} |{" "}
                  </a>
                </React.Fragment>
              ))}
          </p>
        </div>
      </header>
      <a href={data.link} className="image">
        <img src={`${data.image}`} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    sourceCodeLinks: PropTypes.arrayOf(
      PropTypes.shape({
        linkTitle: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default Cell;
