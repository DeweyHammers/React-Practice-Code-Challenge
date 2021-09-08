import React from "react";

const MoreButton = (props) => {
  return (
    <button onClick={() => props.handleshowMoreSushi()}>More sushi!</button>
  );
};

export default MoreButton;
