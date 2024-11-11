import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/fpaja.png';
import facebookLogo from '../assets/logofb2.png';
import instagramLogo from '../assets/logoig2.png';
import linkedinLogo from '../assets/logolinked2.png';
import tiktokLogo from '../assets/logotiktok2.png';
import logotokped from '../assets/logotokped2.png';

function Footer() {
  return (
    <footer className="bg-dark text-white py-2">
      <div className="footer-container position-relative" style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <div className="row align-items-center">
          
          <div className="col-md-4">
            <div className="position-absolute" style={{ top: '50%', left: '60px', transform: 'translateY(-50%)' }}>
              <img src={logo} alt="Company Logo" style={{ width: '140px', height: '140px' }} />
            </div>
            <div style={{ marginLeft: '238px', marginTop: '30px', textAlign: 'left' }}>
              <h6 className="mb-1" style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>Head Office</h6>
              <p className="mb-1" style={{ fontSize: '14px', color: 'white' }}>Jl. Srengseng Raya</p>
              <p className="mb-1" style={{ fontSize: '14px', color: 'white' }}>No.41 A-B, RT.4/RW.1, Srengseng</p>
              <p className="mb-1" style={{ fontSize: '14px', color: 'white' }}>Kec. Kembangan, Kota Jakarta Barat,</p>
              <p className="mb-0" style={{ fontSize: '14px', color: 'white' }}>Daerah Khusus Ibukota Jakarta 11630</p>
              <br />
              <h6 className="mb-2" style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>Phone</h6>
              <p className="mb-2" style={{ fontSize: '14px', color: 'white' }}>0815 7474 7474</p>
              <p className="mb-2" style={{ fontSize: '14px', color: 'white' }}>0815 7547 3390</p>
              <p className="mb-2" style={{ fontSize: '14px', color: 'white' }}>0815 7545 3564</p>
            </div>
          </div>

          {/* Center: Phone, Email, and Social Media Links */}
          <div className="col-md-4 text-center" style={{ marginTop: '-20px', marginLeft: '30px' }}> {/* Adjusted marginTop */}
            <h6 className="mb-2" style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>Connect With Us</h6>
            <a href="https://facebook.com" className="mx-2">
              <img src={facebookLogo} alt="Facebook" style={{ width: '20px', height: '20px' }} />
            </a>
            <a href="https://instagram.com" className="mx-2">
              <img src={instagramLogo} alt="Instagram" style={{ width: '20px', height: '20px' }} />
            </a>
            <a href="https://linkedin.com" className="mx-2">
              <img src={linkedinLogo} alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
            </a>
            <a href="https://tiktok.com" className="mx-2">
              <img src={tiktokLogo} alt="TikTok" style={{ width: '20px', height: '20px' }} />
            </a>
            <a href="https://tokopedia.com" className="mx-2">
              <img src={logotokped} alt="Tokopedia" style={{ width: '20px', height: '20px' }} />
            </a>
            <br />
            <br />
            <br />
            <br />
            <h6 className="mb-2" style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>Email</h6>
            <div className="footer-links d-flex justify-content-center">
              <p className="mb-2" style={{ fontSize: '14px' }}>
                <a href="mailto:marketing@farrasindo-cp.co.id" className="text-white">marketing@farrasindo-cp.co.id</a>
              </p>
            </div>
          </div>

          {/* Right: Google Maps */}
          <div className="col-md-4 d-flex justify-content-end" style={{ marginLeft: '-60px' }}> {/* Adjusted marginLeft */}
            <div style={{ width: '350px', height: '110px', marginBottom: '200px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.496174354221!2d106.7535656737797!3d-6.1980789607173215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f77305c654ff%3A0x5c50db3133a6daae!2sPT.%20FARRASINDO%20PERKASA%20-%20HEAD%20OFFICE%20(%20CONCRETE%20PUMP%20)!5e0!3m2!1sid!2sid!4v1723619411752!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: '1px solid #ccc', borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
        <div className="text-center mt-2" style={{marginLeft: '30px', color: 'white'}}>
          <p className="mb-0" >&copy; 2024 Farrasindo</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
