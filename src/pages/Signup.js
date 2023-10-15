import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = () => {
    // You can implement your signup logic here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="signup-container">
      <div className='title_container'><h1>ثبت نام حساب کاربری</h1></div>
      <div className="input-containers">
        <input type="text" value={firstName} onChange={handleFirstNameChange} placeholder='نام' required maxLength={30} />
        <input type="text" value={lastName} onChange={handleLastNameChange} placeholder='نام خانوادگی' required maxLength={30} />
      </div>
      <div className="input-containers">
        <input type="email" value={email} onChange={handleEmailChange} placeholder='ایمیل' maxLength={50} required/>
        <input type="password" value={password} onChange={handlePasswordChange} placeholder='کلمه عبور'  required maxLength={32}/>
      </div>
      <button onClick={handleSignup} className='button-container '>ثبت نام</button>
      <h2 className='google_signin'> با گوگل ثبت نام کن</h2>
      <div>
         اکانت داری؟ <a className="login-link" href="./Login">وارد </a> شو
      </div>
    </div>
  );
};

export default Signup;
