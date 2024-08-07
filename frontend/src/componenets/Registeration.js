import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import '../asserts/reg.css';

function Registeration ({addUser}) {
  const initialFormState = { id: null, name: '', email: '', event: '', mobile: '', date: '' };
  const [user, setUser] = useState(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User before adding:', user);
    if (!user.name || !user.email || !user.mobile || !user.date) return;
    addUser(user);
    setUser(initialFormState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', height: '95%' }}>
      <FontAwesomeIcon style={{ color: 'black', marginLeft: '93%' }} icon={faClose} size="2x" />
      <h1 style={{ marginTop: '-10px' }}>Request a Quote</h1>
      <div className="rcontainer">
        <label style={{ marginTop: '24px' }}>
          What's your Name?
          <input type="text" name="name" placeholder='Name' value={user.name} onChange={handleInputChange} />
        </label>
        <label style={{ marginTop: '24px' }}>
          What's your email?
          <input type="text" name="email" placeholder='Email' value={user.email} onChange={handleInputChange} />
        </label>
        <label style={{ marginTop: '24px' }}>
          What's your mobile no?
          <input type="text" name="mobile" placeholder='Mobile No' value={user.mobile} onChange={handleInputChange} />
        </label>
        <label style={{ marginTop: '24px' }}>
          What's your Event?
          <input type="text" name="event" placeholder='Event' value={user.event} onChange={handleInputChange} />
        </label>
        <label style={{ marginTop: '24px' }}>
          Event date?
          <input type="date" name="date" value={user.date} onChange={handleInputChange} />
        </label>
        <p><input style={{ position: 'relative', left: '-48%' }} type="checkbox" />Remember Me</p>
        <label style={{ marginTop: '24px' }}>
          <input type="submit" value='Get Your Quote' style={{ backgroundColor: 'tomato', height: '41px', fontSize: '18px', color: '#fff', borderRadius: '5px' }} />
        </label>
      </div>
    </form>
  );
}

export default Registeration;
