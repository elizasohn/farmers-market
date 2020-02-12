import React from "react";
import PropTypes from "prop-types";

function Produce(props){
  return (
    <div>
    <style jsx>{`
      div {
        background-color: blue;
      }
      `}</style>
      <h3>{props.month}</h3>
      <ul>{props.selection.map((sel, index) =>
      <li key={index}> {sel}</li>
    )}</ul>
      <hr/>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired,
};

export default Produce;
