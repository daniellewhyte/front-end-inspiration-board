import React from "react";
import PropTypes from "prop-types";
import "../styles/Card.css";

const Card = (props) => {
  const updateLikes = () => {
    props.onAddLike(props.id);
  };

  const removeCard = () => {
    props.onDeleteCard(props.id);
  };

  return (
    <section className="card">
      <p>{props.message}</p>
      <button onClick={updateLikes}>{props.likeCount} 💛</button>
      <button onClick={removeCard}>🗑</button>
    </section>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  onAddLike: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

export default Card;
