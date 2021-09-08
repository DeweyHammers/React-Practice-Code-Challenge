import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";

const SushiContainer = ({ sushi }) => {
  return (
    <Fragment>
      <div className="belt">
        {console.log(sushi)}
        <MoreButton />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
