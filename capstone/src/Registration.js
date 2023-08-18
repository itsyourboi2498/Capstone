import React, {useState, useEffect} from 'react'
import { createUser } from './User'
import './Combined.css'
import { useNavigate } from 'react-router-dom';


function AccountRegistration() {
    const navigate = useNavigate()

    const[accountInfo, setAccuntInfo] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstname: "",
        lastname: "",
        address: "",
        contact: "",
        nric: "",
        dob: ""
    })

    const[errors, setErrors] = useState({})
    const[showSuccessMsg, setShowSuccessMsg] = useState(false)

    useEffect(() => {
        if (showSuccessMsg) {
          setTimeout(() => {
            // Redirect to the login page after 2 seconds
            handleBackToLogin()
          }, 2000); // 2000 milliseconds = 2 seconds
        }
      }, [showSuccessMsg, navigate]);

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setAccuntInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //client-side validation (simple version)
        const isValidated = infoValidation()
        if (!isValidated) return;
        //submit data to local database
        createUser(accountInfo.email, accountInfo.password, accountInfo.firstname,
                     accountInfo.lastname, accountInfo.address,
                      accountInfo.contact, accountInfo.nric, accountInfo.dob)
        setShowSuccessMsg(true)
    }
    

    const infoValidation = () => {
        const registrationErrors = {}
        if (!accountInfo.email) { //or to be more strict: < certain length
            registrationErrors.email = "Email is required"
        }
        if (!accountInfo.password) { //or to be more strict: < certain length
            registrationErrors.password = "Password is required"
        }
        if (accountInfo.confirmPassword !== accountInfo.password) { //or to be more strict: < certain length
            registrationErrors.confirmPassword = "Passwords do not match"
        }
        if (Object.keys(registrationErrors).length > 0) {
            setErrors(registrationErrors)
            return false
        } else {
            return true
        }
    }

    const handleBackToLogin = () => {
        navigate('/');
    }

    return (
        <div className="blank-page">
                <div className='form-container'>
                    <h2>Create an account with us!</h2>
            <form onSubmit={handleSubmit} >
                
            {/* <p>Email: </p> */}
            <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id='email'
                        value={accountInfo.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                
                    <p>Password: </p>
                    <input
                        type="text"
                        name="password"
                        value={accountInfo.password}
                        onChange={handleInputChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                
                    <p>Confirm password: </p>
                    <input
                        type="text"
                        name="confirmPassword"
                        value={accountInfo.confirmPassword}
                        onChange={handleInputChange}
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    
                
                    <p>Last Name: </p>
                    <input
                        type="text"
                        name="lastname"
                        value={accountInfo.lastname}
                        onChange={handleInputChange}
                    />
                
                    <p>First Name: </p>
                    <input
                        type="text"
                        name="firstname"
                        value={accountInfo.firstname}
                        onChange={handleInputChange}
                    />
                
                
                    <p>Address: </p>
                    <input
                        type="text"
                        name="address"
                        value={accountInfo.address}
                        onChange={handleInputChange}
                    />
                
                
                    <p>Contact number: </p>
                    <input
                        type="text"
                        name="contact"
                        value={accountInfo.contact}
                        onChange={handleInputChange}
                    />
                
                
                    <p>NRIC: </p>
                    <input
                        type="text"
                        name="nric"
                        value={accountInfo.nric}
                        onChange={handleInputChange}
                    />
                
                
                <p>Date of birth: </p>
                    <input
                        type="date"
                        name="dob"
                        value={accountInfo.dob}
                        onChange={handleInputChange}
                    />
                    
                    <button  type="submit">Register</button>

                {showSuccessMsg && (
                    <div className="popup-success">
                        <p>Account created successfully!</p>
                    </div>
                )}
            </form>
            </div>
        </div>
    )
}

export default AccountRegistration