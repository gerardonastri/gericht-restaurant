import React from 'react';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'

import './Gallery.css';
import {images} from '../../constants'
import {SubHeading} from '../../components'
import { useRef } from 'react';

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
]

const Gallery = () => {

  const scrollRef = useRef();

  const scroll = (dir) => {

  }

  return (
    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className='p__opensans' style={{color: '#aaa', marginTop: '2rem'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi in totam corporis ex consequatur exercitationem vel nostrum dignissimos aperiam.
        </p>
        <button className='custom__button'>View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((img, i) => (
            <div className="app__gallery-images_card flex__center" key={i}>
              <img src={img} alt="gallery" />
              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
