import React, { useState } from 'react';
import './Login.css';
import GoogleIcon from '../svg/google-icon.svg'; // Replace with the actual path to your downloaded SVG file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // You can implement your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h1 className='loginh`'>ورود به حساب کاربری</h1>
      <div className="input-container">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="ایمیل"
          required
          maxLength={50}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="کلمه عبور"
          required
          maxLength={32}
        />
      </div>
      <button onClick={handleLogin} >ورود</button>

      <button className="google-login">
      <span className='googletext'> ورود با گوگل </span>
        <img src={GoogleIcon} alt="Google Icon" className="google-icon" />
        
      </button>
      <div className="password-reset">
        <a href="#">کلمه عبورم یادم نمیاد!</a>
      </div>
      <div className="signup-link">
        <span className="sign"> تازه اومدی؟ </span>
        <a href="./Signup"> ثبت نام </a> کن
      </div>
    </div>
  );
};

export default Login;
