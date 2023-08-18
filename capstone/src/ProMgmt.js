import React, { useState } from 'react';
import './Combined.css';
import { useNavigate } from 'react-router-dom';
import { updateUser } from './User';


//retrive user data
//display use data
//form validation
//update user data
//save button
//logout page button
function ProMgmt({authenticatedUser}){
    const [updatedfirstname, setUpdatedFirstname] = useState(authenticatedUser.firstname);
    const [updatedlastname, setUpdatedLastname] = useState(authenticatedUser.lastname);
    const [updatedaddress, setUpdatedAddress] = useState(authenticatedUser.address);
    const [updatedcontact, setUpdatedContact] = useState(authenticatedUser.contact);
    const [updatednric, setUpdatedNric] = useState(authenticatedUser.nric);
    const [updateddob, setUpdatedDob] = useState(authenticatedUser.dob);

    const navigate = useNavigate()
    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');



    const handleProMgmt = (event) =>{
        console.log(localStorage);
        event.preventDefault();
        const updatedUserData = {
            firstname: updatedfirstname,
            lastname: updatedlastname,
            address: updatedaddress,
            contact: updatedcontact,
            nric: updatednric,
            dob: updateddob,
          };
          updateUser(loggedInUserEmail, updatedUserData);
          console.log('Updated User Data:', updatedUserData);

        

    };

    

    
    const handleLogOut = (event) => {
        // Handle logout logic here
        event.preventDefault();
        console.log('Logged out');
        localStorage.setItem('loggedInUserEmail', '')
        navigate('/');
      };
    


    return (
        <div className="blank-page">
          
          <div className='form-container'>
            <form >
            <h2>      Welcome {authenticatedUser.firstname} to Profile Managment.</h2>
            
            <br />
                <p>First Name:</p>
                <input type='text' placeholder={authenticatedUser.firstname} value={updatedfirstname} onChange={(e)=>setUpdatedFirstname(e.target.value)}/>
                
                <p>Last Name:</p>
                <input type='text' placeholder={authenticatedUser.lastname} value={updatedlastname} onChange={(e)=>setUpdatedLastname(e.target.value)}/>
                
                <p>Address:</p>
                <input type='text' placeholder={authenticatedUser.address} value={updatedaddress} onChange={(e)=>setUpdatedAddress(e.target.value)}/>
                
                <p>Contact Number:</p>
                <input type='text' placeholder={authenticatedUser.contact} value={updatedcontact} onChange={(e)=>setUpdatedContact(e.target.value)}/>

                <p>NRIC:</p>
                <input type='text' placeholder={authenticatedUser.nric} value={updatednric} onChange={(e)=>setUpdatedNric(e.target.value)}/>

                <p>Date of Birth:</p>
                <input type='Date' placeholder={authenticatedUser.dob} value={updateddob} onChange={(e)=>setUpdatedDob(e.target.value)}/>
                <button  onClick={handleProMgmt}>Save Changes</button>
                <br />
                <button onClick={handleLogOut}>Logout</button>
                
            </form>
          </div>
          
        </div>
      );
    }




export default ProMgmt;