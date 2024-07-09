import React from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const images = [
    {
      src: 'https://media.istockphoto.com/id/1059005872/photo/man-using-smartphone.webp?b=1&s=170667a&w=0&k=20&c=bSki-Zevm3d2hx3aMSl9XXzZNuOEVBpdFtX31bWCoa0=',
      title: 'Image Title 1',
      description: 'Image Description 1'
    },
    {
      src: 'https://thumbs.dreamstime.com/b/family-holding-hands-beach-watching-sunset-12543477.jpg',
      title: 'Image Title 2',
      description: 'Image Description 2'
    },
    {
      src: 'https://media.istockphoto.com/id/1068405652/photo/young-girl-pulling-sled-behind-her-on-snow-covered-slope.jpg?s=612x612&w=0&k=20&c=fdJQa60HAuw1-58wovHm206_hC3EX9Qat2hBPBUgtVc=',
      title: 'Image Title 3',
      description: 'Image Description 3'
    },
    {
      src: 'https://thumbs.dreamstime.com/b/rowing-boat-15437.jpg',
      title: 'Image Title 4',
      description: 'Image Description 4'
    },
    {
      src: 'https://media.istockphoto.com/id/1363654464/photo/a-little-boy-playing-in-the-sandbox-at-the-playground-outdoors-toddler-playing-with-sand.jpg?s=612x612&w=0&k=20&c=Xd5m7noNCwufzXHocR6ih7FEWi3nDcsIvo4yhF8iS7w=',
      title: 'Image Title 5',
      description: 'Image Description 5'
    },
    {
      src: 'https://media.istockphoto.com/id/165085322/photo/man-standing-on-jetty.jpg?s=612x612&w=0&k=20&c=WsPOcUnsFiShZPEEzURdxs-IQvEulKHzYnCbIAUhfIw=',
      title: 'Image Title 6',
      description: 'Image Description 6'
    }
  ];

  return (
    <>
      <h1>Our gallery</h1>      
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-box">
          <img src={image.src} alt={image.title} />
       </div>
      ))}
    </div>
    {/* SING UP TO NEWS LETTER LABEL */}

    <h1 className="center-text">Sing up to our news letter</h1>
    <div className="form-container">
        <div className='box'>
        <input type="email"  placeholder='Enter your email here'/>
        <button type="submit">Submit</button>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;