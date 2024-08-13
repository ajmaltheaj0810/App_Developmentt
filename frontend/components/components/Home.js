
import React, { useState } from 'react';
import Modal from 'react-modal';
import cake from "../asserts/images/Fondant-Iced-Wedding-Cakes-With-Sculpted-Flowers.jpg";
import bcimg from "../asserts/images/background.jpeg";
import band from "../asserts/images/band.jpg";
import br from "../asserts/images/birthday-cake.png";
import bookh from '../asserts/images/bookh.png';
import cater from "../asserts/images/caterer.jpg";
import banquet from "../asserts/images/city-hall.png";
import cock from "../asserts/images/cocktail.png";
import flower from "../asserts/images/florist.jpg";
import pool from "../asserts/images/pool-party.png";
import quote from '../asserts/images/quoteh.png';
import rest from "../asserts/images/restaurant.png";
import searchh from '../asserts/images/searchh.png';
import team from "../asserts/images/team.png";
import venderbc from '../asserts/images/venderbc.png';
import eng from "../asserts/images/wedding-rings.png";
import wed from "../asserts/images/wedding.png";
import Dropdown from './Dropdown';
import Footer from './Footer';
import Navbar from './Navbar';
import Registeration from './RegistrationForms/Registeration';
import VenderRegisteration from './RegistrationForms/VenderRegisteration';
const categories = [
  { img: wed, alt: "Wedding", text: "Wedding" },
  { img: br, alt: "Birthday", text: "Birthday" },
  { img: eng, alt: "Engagement", text: "Engagement" },
  { img: pool, alt: "Pool Party", text: "Pool Party" },
  { img: rest, alt: "Restaurants", text: "Restaurants" },
  { img: cock, alt: "Cocktail", text: "Cocktail Party" },
  { img: banquet, alt: "City", text: "Banquet" },
  { img: team, alt: "Team", text: "Corporate Party" },
];
const vendors = [
  { img: band, alt: "band", text: "Band" },
  { img: flower, alt: "flower", text: "Flowers" },
  { img: cake, alt: "cake", text: "Cake" },
  { img: cater, alt: "caterer", text: "Caterer" },

];
function Home({ setIsAuthenticated }) {
  const [visible, setVisible] = useState(false);
  const [openv, setOpenv] = useState(false);
  const show = () => setVisible(true);
  const sh = () => setOpenv(true);
  const customStyles = {
    content: {
      width: '31%',
      height: 'auto',
      margin: 'auto',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#f8f9fa',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  const customStyle = {
    content: {
      width: '67%',
      height: '95%',
      margin: 'auto',
      display: 'flex',
      paddingLeft: '40px',
      borderRadius: '10px',
      backgroundColor: '#f8f9fa',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  const bcstyle = {
    backgroundImage: `url(${bcimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
  };
  return (
    <div className="hcontainer">
      <div className="header" style={bcstyle}>
        <Navbar />
        <h2>Find & Book The Best Venue For Every Single Event</h2>
     <Dropdown/>
      </div>

      <div className="hcenter">
        <table cellPadding="10%">
          <tbody>
            <tr>
              {categories.map(({ img, alt }) => (
                <td key={alt} style={{ textAlign: 'center' }}>
                  <img src={img} onClick={show} alt={alt} className="table-image" />
                  <p className="text">{alt}</p>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        <span className="category">Vendors By Category</span>
        <div className="vender">
          <table cellPadding="10%">
            <tbody>
              <tr>
            
                {vendors.map(({ img, alt, text }) => (
                  <td key={alt} style={{ textAlign: 'center' }}>
                    <img src={img} onClick={sh} alt={alt} className="table-image" />
                    <p style={{marginTop:'10px'}} className="text">{text}</p>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className='howitworks'>
          <p>How It Works?</p>
          <div className='hw-container'>
            <div>
              <img src={searchh} alt="Browse Venues" className="table-image" />
              <h4>Browse Venues</h4>
              <p>Check out the best suited Venues, compare photos, special offers and function packages.</p>
            </div>
            <div>
              <img src={quote} alt="Request Quotes" className="table-image" />
              <h4>Request Quotes</h4>
              <p>Get custom quotes of your short-listed Venues at the click of GET FREE QUOTES button.</p>
            </div>
            <div>
              <img src={bookh} alt="Book a Venue" className="table-image" />
              <h4>Book a Venue</h4>
              <p>Select and Book the perfect venue in no time at all. Time is money, save both.</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
      <Modal
        isOpen={visible}
        style={customStyles}
        onRequestClose={() => setVisible(false)}
        contentLabel="Request Quote Modal"
      >
        <Registeration onClose={() => setVisible(false)} />
      </Modal> 
      <Modal
        isOpen={openv}
        style={customStyle}
        onRequestClose={() => setOpenv(false)}
        contentLabel="Vendor Registration Modal"
      >
        <img src={venderbc} style={{ width: '40%', height: '60%', marginTop: '15%' }} alt='Vendor Background' />
        <VenderRegisteration onClose={() => setOpenv(false)} />
      </Modal>
    </div>
  );
}

export default Home;