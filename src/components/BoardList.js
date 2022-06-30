import React, { useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const BoardList = (props) => {
  // useEffect to re-render component anytime boards is updated
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/boards")
      .then((response) => {
        console.log("Successfully retrieved boards!");
        console.log(response.data);
      })
      .catch(() => {
        console.log("Error retrieving boards");
      });
  }, [props.boards]);

  // map function to return bullet list item with title of each board
  const boardTitles = props.boards.map((board) => {
    return <li>{board.title}</li>;
  });

  return (
    <section>
      <h2>Looking for inspiration? Choose a board!</h2>
      <ul>{boardTitles}</ul>
    </section>
  );
};

// receives array of board objects which contain board title and creator
// (these board objects should reflect boards in database)
BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
  // function that will execute when user selects a board (should display board)
  selectBoard: PropTypes.func.isRequired,
};

export default BoardList;
