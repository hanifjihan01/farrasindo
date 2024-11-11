import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import '../AbilityImages.css';
import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react';
import AOS from 'aos';
import cp1 from '../assets/gambarslide1.jpeg';
import cp2 from '../assets/gambarslide2.jpeg';
import cp3 from '../assets/gambarslide3.jpeg';
import cp4 from '../assets/gambarslide4.jpeg';
import cp5 from '../assets/gambarslide5.jpeg';

const AbilityImages = () => {
  const titles = ["PORTFOLIO 1", "PORTFOLIO 2", "PORTFOLIO 3", "PORTFOLIO 4", "PORTFOLIO 5"];
  const subtitles = ["GAMBAR 1", "GAMBAR 2", "GAMBAR 3", "GAMBAR 4", "GAMBAR 5"];
  const images = [cp1, cp2, cp3, cp4, cp5];

  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    updateArrowVisibility();
  }, []);

  const updateArrowVisibility = () => {
    const container = containerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft + container.clientWidth < container.scrollWidth);
    }
  };

  const scroll = (direction) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
      setTimeout(updateArrowVisibility, 300); 
    }
  };

  return (
    <div className="container my-4 position-relative">
      <div className="position-relative">
        <div className="row flex-nowrap overflow-auto" ref={containerRef} style={{ scrollSnapType: 'x mandatory' }}>
          {images.map((image, index) => (
            <div
              className="col-md-3 col-sm-6 mb-4"
              key={index}
              data-aos="fade-right"
              style={{ flex: '0 0 auto', width: '350px', height: '350px' }}
            >
              <div className="card image-box shadow-sm rounded" style={{ height: '100%' }}>
                <img
                  src={image}
                  alt={titles[index]}
                  className="card-img-top ability-image rounded-top"
                  style={{ height: '200px', width: '300px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title font-weight-bold">{titles[index]}</h5>
                  <p className="card-subtitle text-muted">{subtitles[index]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showLeftArrow && (
          <ArrowCircleLeft
            className="arrow-icon position-absolute"
            size={62}
            onClick={() => scroll('left')}
            style={{ left: 0, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
          />
        )}
        {showRightArrow && (
          <ArrowCircleRight
            className="arrow-icon position-absolute"
            size={62}
            onClick={() => scroll('right')}
            style={{ right: 0, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
          />
        )}
      </div>
    </div>
  );
};

export default AbilityImages;
