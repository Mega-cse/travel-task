import React from 'react';
import Card from './Card';

const All = ({ data }) => {
  return (
    <div className='card-grid'>
     
      {data.map((data) => (
        <Card key={data.id} products={data} />
      ))}
    </div>
  );
};

export default All;