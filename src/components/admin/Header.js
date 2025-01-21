import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { FaSearch, FaBell, FaUser, FaUserPlus } from 'react-icons/fa';
import './styles/header.css';

const Header = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New order received' },
    { id: 2, message: 'Catalog update pending' }
  ]);

  const navigate = useNavigate();

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for:', searchQuery);
  };

  const handleNavigate=(route) => {
    setIsProfileMenuOpen(false);
    navigate(route);
  };

  return (
    <header className="admin-header">
      <div className="header-left">
        <img src="/gcr-logo-header.png" alt="GCR Logo" className="logo" />
      </div>
      
      <div className="header-center">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search products, categories, or orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <FaSearch />
          </button>
        </form>
      </div>

      <div className="header-right">
        <div className="notifications">
          <FaBell className="notification-icon" />
          <span className="notification-badge">
            {notifications.length}
          </span>
          <div className="notification-dropdown">
            {notifications.map(notification => (
              <div key={notification.id} className="notification-item">
                {notification.message}
              </div>
            ))}
          </div>
        </div>

         {/* Signup button*/}
         <div className="signup-button">
          <button onClick={() => handleNavigate('/signup')} className="signup-link">
            <FaUserPlus className="signup-icon"/> Sign Up
          </button>
         </div>


        <div className="profile-menu">
          <button onClick={toggleProfileMenu} className="profile-button">
            <FaUser />
          </button>
          {isProfileMenuOpen && (
            <div className="profile-dropdown">
              <a href="/profile">Profile</a>
              <a href="/settings">Settings</a>
              <a href="/support">Support</a>
              <a href="/logout">Logout</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;