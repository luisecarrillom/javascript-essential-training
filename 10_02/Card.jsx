// File: Card.jsx

import React from "react";
import PropTypes from "prop-types";

// Simple style for clickable image
const clickableStyle = { cursor: "pointer", border: "2px solid blue" };

// React functional component
const Card = ({ id, title, image, onImageClick }) => {
  const handleClick = (event) => {
    onImageClick(event, { id, title });
  };

  return (
    <div className="card" style={{ padding: "1rem", textAlign: "center" }}>
      <h2>{title}</h2>
      <img
        src={image}
        alt={title}
        style={clickableStyle}
        onClick={handleClick}
      />
    </div>
  );
};

// Prop validations 
Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default Card;
