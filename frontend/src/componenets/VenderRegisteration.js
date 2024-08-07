import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import '../asserts/reg.css';
const VenderRegisteration = ({onClose}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{width:'100%',height:'95%'}}>
          <FontAwesomeIcon onClick={onClose} style={{color:'black',marginLeft:'93%'}} icon={faClose} size="2x" />

    <h1 style={{marginTop:'-10px'}}>Request Your Vender</h1>
    <div class="rcontainer">
    <label style={{marginTop:'24px'}}>
    Whats your Name?
        <input type="text" name="name" placeholder='Name'   />
      </label>
      <label style={{marginTop:'24px'}}>
    What's your email?
        <input type="text" name="email" placeholder='Email' />
      </label>
      <label style={{marginTop:'24px'}}>
    What's your mobile no?
        <input type="text" name="mobile" placeholder='Mobile No' />
      </label>
      <label style={{marginTop:'24px'}}>
    What's your Event?
        <input type="text" name="event" placeholder='Event' />
      </label>
      <label style={{marginTop:'24px'}}>
    Event date?
        <input type="date" name="date"  />
      </label>
      
      <p><input style={{position:'relative',left:'-48%'}}type="checkbox"/>Remember Me</p>

      <label style={{marginTop:'24px'}}>
        <input type="button" value='Get Your Quote' style={{backgroundColor:'tomato',height:'41px',fontSize:'18px',color:'#ffff',borderRadius:'5px'}} name="button"  />
      </label>
    </div>
   </div>
  );
};

export default VenderRegisteration;
