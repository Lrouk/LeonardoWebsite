import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const scroll = (direction) => {
    if (direction === 'left') {
      setCurrentImageIndex(currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1);
    } else {
      setCurrentImageIndex(currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1);
    }
  };
  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

  return (
    <div className="app__gallery flex__center app__wrapper section__padding">
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          <div className="app__gallery-images_card flex__center" key={`gallery_image-${currentImageIndex + 1}`}>
            <img src={galleryImages[currentImageIndex]} alt="gallery " />
            <BsInstagram className="gallery__image-icon" />
          </div>
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
      <div className="app__wrapper_info">
        <a type='button' className="custom__a">What We Believe In </a>
        <h1 className="headtext__cormorant">- Our Choice</h1>
        <p className="p__opensans">
          Our cocktail bar believes in quality ingredients, creativity, artistry, customer service, sustainability, inclusion, education, community and fun.
          We are passionate about mixology and strive to create amazing drinks using fresh and unique ingredients.
          Our goal is to create a welcoming and enjoyable atmosphere for all guests while staying true to our identity and vision.
        </p>
      </div>
    </div>
  );
};

export default Gallery;
