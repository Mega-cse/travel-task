import React from 'react';

const ImageText = () => {
  return (
    // IMAGE
    <div class="container">
      <div class="image">
      <img src="https://gentleholidays.com/wp-content/uploads/2022/07/slide-1.png"
        alt="image"
        style={{ width: '400px', height: '500px' }}
        /> 
      </div>
      {/* TEXT */}
      <div class="text">
        <h1>Explore all corners of </h1>
           <h1> The world with us </h1>
        <p>Travel is fatal to prejudice and narrow mindedness,
        And many of our people need it safety on these accounts.
        And many of our people need it safety</p>
      </div>
    </div>
  );
};

export default ImageText;
