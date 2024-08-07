import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React, useState } from 'react';
import Modal from 'react-modal';
import cake from "../asserts/images/pasteries.jpg";
import bcimg from "../asserts/images/background.jpg";
import band from "../asserts/images/band1.jpg";
import br from "../asserts/images/birthday-cake.png";
import cater from "../asserts/images/caterer.jpg";
import banquet from "../asserts/images/red-carpet.png";
import cock from "../asserts/images/cocktail.png";
import flower from "../asserts/images/grandhall.jpg";
import pool from "../asserts/images/pool-party.png";
import rest from "../asserts/images/restaurant.png";
import team from "../asserts/images/tea-party.png";
import eng from "../asserts/images/wedding-rings.png";
import decor from "../asserts/images/decoration.jpg";
import wed from "../asserts/images/wedding.png";
import mband from "../asserts/images/musicband.jpg";
import Navbar from './Navbar';
import bride from "../asserts/images/bridalwear.jpg";
import mehandi from "../asserts/images/mehandi.jpg";
import Registeration from './Registeration';




function Home({addUser}){
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  }
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
  const bcstyle={
    backgroundImage: `url(${bcimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh', // Set the height to cover the entire viewport
    width: '100vw', 
  };
  return(
    <div class="hcontainer">
            <div class="header" style={bcstyle}>
              <Navbar/>

        <h2>Memorable events don't just happen. They happen to be our business.</h2>
        <input type="text" placeholder='Search' class="search"/>
        <input type="text" placeholder='Location' class="search"/>
        <div class="searb">search</div>
      </div>


      
      <div class="hcenter">
        <table cellPadding="100%">
          <tr>
            <td><img src={wed} onClick={show} alt="Wedding" className="table-image" /></td>
            <td><img src={br} onClick={show} alt="Birthday" className="table-image" /></td>
            <td><img src={eng} onClick={show} alt="Engagement" className="table-image" /></td>
            <td><img src={pool} onClick={show} alt="Pool Party" className="table-image" /></td>
            <td><img src={rest} onClick={show} alt="Restaurants" className="table-image" /></td>
            <td><img src={cock} onClick={show} alt="Cocktail" className="table-image" /></td>
            <td><img src={banquet} onClick={show} alt="City" className="table-image" /></td>
            <td><img src={team} onClick={show} alt="Team" className="table-image" /></td>
          </tr>
          
          <tr>
            <td className="text">Wedding</td>
            <td className="text">Birthday</td>
            <td className="text">Engagement</td>
            <td className="text">Pool Party</td>
            <td className="text">Restaurants</td>
            <td className="text">Cocktail Party</td>
            <td className="text">Red Carpet</td>
            <td className="text">Tea  party</td>
          </tr>
        </table>
        <span class="category">Facilities provided by us</span>
      <div class="vender">
      <table cellPadding="100%">
     
          <tr>
           
            <td><img src={band} alt="band" className="table-image" /></td>
            <td><img src={flower} alt="flower" className="table-image" /></td>
            <td><img src={cake} alt="cake" className="table-image" /></td>
            <td><img src={cater} alt="caterer" className="table-image" /></td>
          </tr>
          <tr>
           
           <td className="text">Acanthus Restaurant provided</td>
           <td className="text">Grand Hall</td>
           <td className="text">Pasteries</td>
           <td className="text">Caterer</td>
         </tr>
         <tr>
           
            <td><img src={decor} alt="decoration" className="table-image" /></td>
            <td><img src={mband} alt="mband" className="table-image" /></td>
            <td><img src={bride} alt="cake" className="table-image" /></td>
            <td><img src={mehandi} alt="mehandi" className="table-image" /></td>
          </tr>
          <tr>
           
           <td className="text">Decorations </td>
           <td className="text">music</td>
           <td className="text">Bridal wear</td>
           <td className="text">mehandi</td>
         </tr>
        </table>
        </div>
        <button style={{marginTop:'250px',width:'250px',marginLeft:'45%'}}>For more information</button>
    </div>
<br></br>

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
        <span>&copy; 2024 Amplify. All rights reserved.</span>
        </div>
        <Modal
        isOpen={visible}
       style={customStyles}
        onRequestClose={() => setVisible(false)}
        contentLabel="Request Quote Modal"
      >
        <Registeration onClose={() => setVisible(false)} addUser={addUser} />
      </Modal>




    </div>
  );
}
export default Home;