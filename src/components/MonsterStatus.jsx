import React, { useEffect, useRef, useState } from 'react';
import '../MonsterStatus.css';  // Ensure the CSS contains animations

const MonsterStatus = () => {
  const [isVisible, setIsVisible] = useState(false);
  const monsterRef = useRef(null);

  // Use Intersection Observer to trigger animation when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);  // Add active class when in view
          }
        });
      },
      { threshold: 0.5 }  // Trigger when 50% of the component is visible
    );

    if (monsterRef.current) {
      observer.observe(monsterRef.current);
    }

    return () => {
      if (monsterRef.current) {
        observer.unobserve(monsterRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`monster-status-container container ${isVisible ? 'active' : ''}`}
      ref={monsterRef}
    >
      <div className="row">
        {/* Image and Attributes */}
        <h2 className="attributebaru">DETAILS</h2>
        <div className="col-md-3 text-center">
          <div className="attributes">
            <div className="strength">
             
            <h2 className="cpp">Concrete Pump</h2>
            </div>
          </div>
        </div>

        {/* Roles */}
        <div className="col-md-6 roles-section">
          <div className="roles">
            <div>
              <strong>Width <span className='width'>: 2.5 Meters </span> </strong>
           
              
            </div>
            <div>
              <strong>Height <span className='height'> : 3.3 Meters </span></strong>
             
              
            </div>
            <div>
              <strong>Length <span className='length' > : 9.2 Meters </span></strong>
              
            </div>
            <div>
              <strong>Weight <span className='weight'>: 14 Tons</span></strong>
              
            </div>
            <div>
              <strong>Boom Arm Length : 24 Meters</strong>
            </div>
            <div>
              <strong>Jacking <span className='jacking'>: 4 Meters (Front) </span> </strong>
             
            </div>
            <div>
            <strong>Jacking <span className='jacking'>:  4 Meters (Rear) </span> </strong>
            </div>
          </div>
        </div>

        {/* Stats */}
      
      </div>
    </div>
  );
};

export default MonsterStatus;
