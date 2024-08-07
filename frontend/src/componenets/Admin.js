import React from 'react';
import { Link } from 'react-router-dom';
import '../asserts/Admin.css';
import UserTable from './UserTable';
const Admin = ({ users, editRow, deleteUser,addUser, closeForm }) => {
  return (
    
    <div className="admin-body">
          <div className='header'>
          <Link to='/AdminUsers' style={{textDecoration:'none'}}><div>DashBoard</div></Link>
          <Link to='/Admin' style={{textDecoration:'none'}}><div>Users</div></Link>

        <div>About</div>
        
     <Link to='/SignIn' style={{textDecoration:'none'}}><div>Sign Out</div></Link>
      </div>
      <div class='Appbar'>
          headder
        </div>
      <form action="/submit_booking" className="form-container">

              <div>
          <h2 style={{marginLeft:'2%'}}>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </form>
    </div>
  );
};

export default Admin;
