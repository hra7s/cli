import React, { useRef, useState } from 'react'
import DetailsPopUp from './DetailsPopUp';

const Details = () => {

    const [showDetailsModal,setShowDetailsModal] = useState(false);
    const [userDetails,setUserDetais] = useState({});

    const emailRef = useRef('');
    const phoeNoRef = useRef('');
    const messageRef = useRef('');

    const handleSubmittedDetails = () => {
        const email = emailRef.current.value;
        const phoneNo = phoeNoRef.current.value;
        const message = messageRef.current.value;
        setUserDetais((prevState) => ({
            ...prevState,
            email : email,
            phoneNo : phoneNo,
            message : message,
        }));
        setShowDetailsModal(true);
    }

    const handleClosePopup = () => {
        setShowDetailsModal(false);
        emailRef.current.value='';
        phoeNoRef.current.value='';
        messageRef.current.value='';
    }

  return (
    <div className='d-flex flex-row justify-content-between px-3'>
        <div className='p-1'>
            <label>Email Address</label>
            <br />
            <input type='email' ref={emailRef}></input>
        </div>
        <div className='p-1'>
            <label>Phone Number</label>
            <br />
            <input type='tel' ref={phoeNoRef}></input>
        </div>
        <div className='p-1'>
            <label>Message</label>
            <br />
            <input type='text' ref={messageRef} ></input>
        </div>
        <button className='btn-secondary' onClick={handleSubmittedDetails}>Submit</button>
        {showDetailsModal && (<DetailsPopUp userDetails={userDetails} onClose={handleClosePopup} />)}
    </div>
  )
}

export default Details