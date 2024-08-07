import { React, useRef, useState } from 'react';
import ibc from "../asserts/images/ibc.webp";
import InvitationForm from './InvitationForm';
import InvitationPreview from './InvitationPreview';
import Navbar from './Navbar';

function Invitation(){
    const [invitation, setInvitation] = useState({
      name1: '',
      name2: '',
      date: '',
      address: '',
      city: '',
    });
    const previewRef = useRef();

    const updateInvitation = (newData) => {
      setInvitation(newData);
    };
  const bcstyle={
    backgroundImage: `url(${ibc}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '120vh', // Set the height to cover the entire viewport
    width: '100vw',
 
  };
  return(
    <div className='ibody' style={bcstyle}>
      <Navbar/>
        <div className="iform" style={{position:'absolute',left:'7%',top:'16%',width:'40%',height:'100%'}}>
        <InvitationForm updateInvitation={updateInvitation} previewRef={previewRef} />
      </div>
      <div className='ipreview' style={{position:'absolute',left:'52%',width:'35%',top:'16%',height:'94%',backgroundImage:'URL(greet)',borderRadius:'5px'}}>
        <InvitationPreview invitation={invitation} />
           </div> 
    </div>
  );
}
export default Invitation;
  