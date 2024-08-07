import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faBuildingColumns, faSackDollar, faLocationDot as solidLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { React, useState } from 'react';
import Modal from 'react-modal';
import bcimg from "../asserts/images/background.jpg";
import v1 from "../asserts/images/v1.jpg";
import v2 from "../asserts/images/v1.jpeg";
import v3 from "../asserts/images/v3.jpeg";
import Navbar from './Navbar';

import '../asserts/venues.css';
import Registeration from './Registeration';


import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
function Venues(){
  const bcstyle={
    backgroundImage: `url(${bcimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
    width: '100vw',
  };
  const [visible, setVisible] = useState(false);
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
  return(
    
    <div class="hcontainer">
            <div class="header" style={bcstyle}>
              <Navbar/>

        <h2>For You Get the Best Venue</h2>
        <input type="text" placeholder='Search' class="search"/>
        <input type="text" placeholder='Location' class="search"/>

        <div class="searb">search</div>
      </div>



      <div class="vscenter">
        <div className='filter'><h2>Filter Your Search</h2>
        <FormControl style={{marginLeft:'43px'}}>
      <FormLabel id="demo-radio-buttons-group-label" style={{marginLeft:'-12px',color:'tomato',fontSize:'18px'}}>Cities</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Chennai" control={<Radio />} label="Chennai" />
        <FormControlLabel value="Delhi" control={<Radio />} label="Delhi" />
        <FormControlLabel value="Mumbai" control={<Radio />} label="Mumbai" />
        <FormControlLabel value="Hyderabad" control={<Radio />} label="Hyderabad" />
        <FormControlLabel value="Jaipur" control={<Radio />} label="Jaipur" />
        <FormControlLabel value="Bangalore" control={<Radio />} label="Bangalore" />
      </RadioGroup>
      <FormLabel id="demo-radio-buttons-group-label" style={{marginLeft:'-12px',color:'tomato',fontSize:'18px'}}>Budget</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Chennai" control={<Radio />} label="Under 10000 Rs" />
        <FormControlLabel value="Delhi" control={<Radio />} label="10001 Rs to 20000 Rs" />
        <FormControlLabel value="Mumbai" control={<Radio />} label="20001 Rs to 30000 Rs" />
        <FormControlLabel value="Hyderabad" control={<Radio />} label="30001 Rs to 50000 Rs" />
        <FormControlLabel value="Jaipur" control={<Radio />} label="50001 Rs to 75000 Rs" />
        <FormControlLabel value="Bangalore" control={<Radio />} label="100000 Rs +" />
      </RadioGroup>
      <FormLabel id="demo-radio-buttons-group-label" style={{marginLeft:'-12px',color:'tomato',fontSize:'18px'}}>Rating</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Chennai" control={<Radio />} label="Under 1" />
        <FormControlLabel value="Delhi" control={<Radio />} label="Between 1 and 2" />
        <FormControlLabel value="Hyderabad" control={<Radio />} label="Between 2 and 3" />
        <FormControlLabel value="Jaipur" control={<Radio />} label="Between 3 and 4" />
        <FormControlLabel value="4to5" control={<Radio />} label="Between 4 and 5" />
        <FormControlLabel value="Bangalore" control={<Radio />} label="Above 5" />
      </RadioGroup>
    </FormControl>
        </div>
     
     
      <div class='scard'>
          <img src={v2} alt="venue1"/>
          <div class="content">
          <h2>Master Hall</h2>
          <p><FontAwesomeIcon style={{color:'black'}} icon={faBuildingColumns} size="1px" /> Classy</p>
          <p><FontAwesomeIcon style={{color:'black'}} icon={solidLocationDot} size="1px" /> Gandhi Road  <FontAwesomeIcon style={{color:'black',marginLeft:'12%'}} icon={faSackDollar} size="1px" /> Rs.50000 Half Day Rent </p>
          <p><FontAwesomeIcon style={{color:'black'}} icon={regularStar} size="1px" />4</p>
          <button onClick={() => setVisible(true)}>Request Quote</button>
      <Modal
        isOpen={visible}         style={customStyles}

        onRequestClose={() => setVisible(false)}
        contentLabel="Request Quote Modal"
      >
        <Registeration onClose={() => setVisible(false)} />
      </Modal>
          </div>
      </div>
      <div class='scard'>
          <img src={v1} alt="venue1"/>
          <div class="content">
          <h2>Sokka Residency</h2>
          <p><FontAwesomeIcon style={{color:'black'}} icon={faBuildingColumns} size="1px" />Star Banquet Hall</p>
          <p><FontAwesomeIcon style={{color:'black'}} icon={solidLocationDot} size="1px" /> Bengaluru <FontAwesomeIcon style={{color:'black',marginLeft:'12%'}} icon={faSackDollar} size="1px" /> Rs.75000 One Day Rent </p>
          <p><FontAwesomeIcon style={{color:'black'}} icon={regularStar} size="1px" />5</p>
          <button onClick={() => setVisible(true)}>Request Quote</button>
      <Modal
        isOpen={visible}         style={customStyles}

        onRequestClose={() => setVisible(false)}
        contentLabel="Request Quote Modal"
      >
        <Registeration onClose={() => setVisible(false)} />
      </Modal>
          </div>
      </div>
      <div class='scard'>
          <img src={v3} alt="venue1"/>
          <div class="content">
          <h2>Rayyan Residency</h2>
          <p><FontAwesomeIcon style={{color:'black'}} icon={faBuildingColumns} size="1px" />Bangla</p>
          <p><FontAwesomeIcon style={{color:'black'}} icon={solidLocationDot} size="1px" />Electronic City <FontAwesomeIcon style={{color:'black',marginLeft:'12%'}} icon={faSackDollar} size="1px" /> Rs.50000 One Day Rent </p>
          <p><FontAwesomeIcon style={{color:'black'}} icon={regularStar} size="1px" />4.5</p>
         
      <button onClick={() => setVisible(true)}>Request Quote</button>
      <Modal
        isOpen={visible}         style={customStyles}

        onRequestClose={() => setVisible(false)}
        contentLabel="Request Quote Modal"
      >
        <Registeration onClose={() => setVisible(false)} />
      </Modal>
          </div>
      </div>
      </div>


            <div className="footer">
        <div className="contact-info">
        <h4>Contact Info</h4>
          <p>Email: example@gmail.com</p>
          <p>Phone: +123-456-7890</p>
          
        </div>
        <div class="formore">
          <h4>Follow Us</h4><br></br>
          <div><FontAwesomeIcon icon={faFacebook} size="2x" /></div>
          <div><FontAwesomeIcon icon={faTwitter} size="2x" /></div>
          <div><FontAwesomeIcon icon={faInstagram} size="2x" /></div>
          <div><FontAwesomeIcon icon={faWhatsapp} size="2x" /></div>
        </div>
        <br></br>
        <span>&copy; 2024 Amplifier. All rights reserved.</span>
        </div>
    
      </div>
  );
};

export default Venues;


