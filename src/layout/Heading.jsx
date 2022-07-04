import React from "react";
import { Link } from "react-router-dom";
const Heading = ({ show }) => {
  return (
    <div className="heading container ">
      <h1>
        gitfinder
        {show && (
          <Link className="cta-link" to="/">
            <i class="bi bi-caret-left-fill"></i>back
          </Link>
        )}
      </h1>
    </div>
  );
};

export default Heading;
