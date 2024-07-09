import React from 'react';
import Card from './Card';

const Icebergs= ({ data}) => {
    const filteredProducts = data.filter((data) => data.place === 'icebergs');
  
  return (
    <div className='card-grid'>
     
     {filteredProducts.map((data) => (
        <Card key={data.id} products={data} />
      ))}
    </div>
  );
};

export default Icebergs;