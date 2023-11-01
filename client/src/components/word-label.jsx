import React, { useState } from 'react';

const WordLabel = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <label onClick={handleToggle} style={{ cursor: 'pointer' }}>
      {isToggled ? 'On' : 'Off'}
    </label>
  );
};

export default WordLabel;