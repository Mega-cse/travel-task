import React from 'react';
import Card from './Card';

const Mountain= ({ data}) => {
    const filteredProducts = data.filter((data) => data.place === 'mountain');
  
  return (
    <div className='card-grid'>
     
     {filteredProducts.map((data) => (
        <Card key={data.id} products={data} />
      ))}
    </div>
  );
};

export default Mountain;