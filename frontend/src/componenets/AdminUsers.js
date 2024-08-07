import React from 'react';
import { Link } from 'react-router-dom';
import '../asserts/Admin.css';
import status from '../asserts/images/status.jpg';
import statustd from '../asserts/images/statusdt.jpeg';

const AdminUsers = ({ users, editRow, deleteUser,addUser, closeForm }) => {
  return (
    
    <div className="admin-body">
          <div className='header'>
          <Link to='/AdminUsers' style={{textDecoration:'none'}}><div>DashBoard</div></Link>
          <Link to='/Admin' style={{textDecoration:'none'}}><div>Bookings</div></Link>
          <Link to='/AdminVender' style={{textDecoration:'none'}}><div>Users</div></Link>
          <Link to='/SignIn' style={{textDecoration:'none'}}><div>Sign Out</div></Link>
        </div>
      <div class='Appbar'>
          <p>DashBoard</p>
          <input type="text" name="search" placeholder='Search' />

        </div>
      <div className='dashboard'>
        <div class='st'>
        <div>
          Available
          <h1>100</h1>
        </div>
        <div>
          Booked
          <h1>20</h1>
        </div>
        <div>
          Cancelled
          <h1>30</h1>
        </div>
        <div>Total
          <h1>50</h1>
        </div>
      </div>
        <div class='admin-status'>
            Status
            <br></br>
        <img src={status} style={{width:'90%',height:'90%',marginLeft:'0%'}} alt="d1" />
        </div>
        <div class='admin-chart'>
            Chart<br></br>
            <img src={statustd} style={{width:'100%', marginLeft:'-20px'}} alt="d1" />

        </div>
</div>
    </div>
  );
};

export default AdminUsers;