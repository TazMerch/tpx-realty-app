import React from "react";

// To size the bubble, the parent element css style needs to contain the gird property. Set the grid-template-column property to the
// preferred number of columns and whatever size you need them to be.

function Bubbleitem(props) {
  return (
    <>
      <a href={props.path} target="_blank" rel="noopener noreferrer">
        <figure>
          <img className="bubble_item_img" src={props.src} alt="Social icon" />
        </figure>
      </a>
    </>
  );
}

export default Bubbleitem;
