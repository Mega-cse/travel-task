import React from 'react';
import Card from './Card';

const Beach= ({ data}) => {
    const filteredProducts = data.filter((data) => data.place === 'beach');
  
  return (
    <div className='card-grid'>
     
     {filteredProducts.map((data) => (
        <Card key={data.id} products={data} />
      ))}
    </div>
  );
};

export default Beach;