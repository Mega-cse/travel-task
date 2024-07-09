import React from 'react';
import Card from './Card';

const Waterfall= ({ data}) => {
    const filteredProducts = data.filter((data) => data.place === 'waterfall');
  
  return (
    <div className='card-grid'>
     
     {filteredProducts.map((data) => (
        <Card key={data.id} products={data} />
      ))}
    </div>
  );
};

export default Waterfall;