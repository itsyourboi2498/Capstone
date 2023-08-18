import React, {useState} from "react";
import ProMgmt from "./ProMgmt";
import LoginPagee from "./Loginpage1";
import AccountRegistration from "./Registration";
import ForgotEp from "./forgotep";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    address: "",
    contact: "",
    nric: "",
    dob: "",
})

;

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to ='/'>Login Page</Link>
            <Link to = '/ProMgmt'>Profile Mgmt</Link>
            <Link to = '/Registration'>Account registration</Link>
            <Link to = '/forgotep'>Password Recovery</Link>
          </nav>
          <Routes>
          <Route path='/' element={<LoginPagee onSignIn={setAuthenticatedUser} />} />
          <Route path='/ProMgmt' element={<ProMgmt  authenticatedUser={authenticatedUser} onLogout={() => setAuthenticatedUser(null)}/>} />
          <Route path='/Registration' element={<AccountRegistration />} />
          <Route path="/forgotep" element={<ForgotEp />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
