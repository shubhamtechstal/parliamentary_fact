// cards/StateWiseCard.js

import React from 'react';

const StateWiseCard = ({ item }) => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
      <h3>{item?.title}</h3>
      <p>{item?.value}</p>
    </div>
  );
};

export default StateWiseCard;
