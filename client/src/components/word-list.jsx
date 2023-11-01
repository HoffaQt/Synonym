import React from "react";
import WordLabel from "./word-label";

const WordLabelList = (labels) => {
  //const labels = ['Word 1', 'Word 2', 'Word 3'];

  return (
    <div>
      <h1>Toggle Label List</h1>
      {labels.map((label, index) => (
        <WordLabel key={index} label={label} />
      ))}
    </div>
  );
};

export default WordLabelList;