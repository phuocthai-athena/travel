import React from "react";
import PropTypes from "prop-types";

const SectionTitle = (props) => {
  const { title, description } = props;
  
  return (
    <div className="heading text-center">
      <span>{title}</span>
      <div className="hr"></div>
      <p className="mb-4">{description}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SectionTitle;
