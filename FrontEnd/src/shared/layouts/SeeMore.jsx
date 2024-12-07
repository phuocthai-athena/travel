import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SeeMore = (props) => {
  const { url, className } = props;

  return (
    <div className={className}>
      <Link to={url}>See more &gt;&gt;</Link>
    </div>
  );
};

SeeMore.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
};

export default SeeMore;
