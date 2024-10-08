import React from 'react';
import pt from '../asserts/images/photograph1.jpeg';
import '../asserts/profile.css';

function Profile({logins=[]}) {
  return (
    <div className="container mt-5 d-flex flex-wrap" style={{height:'90%',backgroundColor:'rgb(177, 215, 96)',width:'100%' }}>
      <div className="card mb-4" style={{width: '30%', height: '95%',boxShadow: '0 0 10px rgba(0,0,0,0.566)'}}>
        <div className="card-header text-center">
          <img
            src={pt}
            className="rounded-circle"
            style={{ width: '195px', height: '195px' }}
            alt="profile"
          />
        </div>
        <div className="card-body text-center">
          <h2 className="card-title">{logins.username}</h2>
          <p className="card-text">software Developer</p>
          <div className="mb-3">
            <label>Email: </label>
            <span>{logins.email}</span>
          </div>
          <div className="mb-3" style={{width: '100%'}}>
            <label>Name: </label>
            <span> Mohammed ajmal k.m</span>
          </div>
          <div className="mb-3">
            <label>Phone No: </label>
            <span> +91 6374928228</span>
          </div>
          <div className="mb-3">
            <label>Birth Date: </label>
            <span> 08.10.2004</span>
          </div>
        </div>
      </div>
<div style={{float:'right',width:'67%',marginLeft:'30px'}}>
      <div className="card mb-4 " style={{width: '100%', height: '45%',boxShadow: '0 0 10px rgba(0,0,0,0.566)'}}>
        <div className="card-body">
          <p><strong>Full Name:</strong>  mohammedajmal</p>
          <p><strong>Email:</strong>  22ads.mohammedajmal.km@skct.edu.in</p>
        </div>
      </div>

      <div className="card mb-4 mt-4" style={{width: '100%', height: '45%',boxShadow: '0 0 10px rgba(0,0,0,0.566)'}}>
        <div className="card-body">
          <p><strong>Full Name:</strong> mohammedajmal</p>
          <p><strong>Email:</strong> 22ads.mohammedajmal.km@skct.edu.in</p>
        </div>
      </div>

</div>
      </div>
  );
}

export default Profile;
