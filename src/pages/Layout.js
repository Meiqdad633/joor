import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  const location = useLocation();

  // Determine if the dropdown should be shown based on the current route
  const isDropdownVisible = !['/Login', '/Signup'].includes(location.pathname);

  return (
    <>
      {isDropdownVisible && (
        <div className="dropdown">
          <button className="dropbtn">
            <i className="fas fa-user"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/Login">ورود</Link>
            <Link to="/Signup">ثبت نام</Link>
          </div>
        </div>
      )}

      <div className="dark-titlebar">
        <h1 id="maintitle">
          <a href="./Home"> Joorchi</a>
        </h1>
        <h2 id="secondt">
          جورچی، پلتفرم کاریابی برای تحقق رویاهای شگفت انگیز شما!
        </h2>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
