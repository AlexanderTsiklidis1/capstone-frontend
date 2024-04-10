import { useState, useContext } from 'react';
import './Navbar.css';
import './Button.css';
import { signInWithGoogle, logOut } from '../Services/Firebase.js';
import { UserContext } from '../Providers/UserProvider';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    logOut().then(() => {
      navigate('/');
    });
  };
  
  const user = useContext(UserContext);
  console.log(user);

  return (
    <nav className='navbar'>
      <div className='menu-icon' onClick={toggleDropdown}>
        <div className='hamburger-icon'>
          <div className='line' />
          <div className='line' />
          <div className='line' />
        </div>

        {isOpen && (
          <div className='dropdown-menu'>
            <Link to="/" onClick={toggleDropdown}>Home</Link>
            <Link to="/userDashboard" onClick={toggleDropdown}>Dashboard</Link>
            <Link to="/book-interview" onClick={toggleDropdown}>Book an Interview</Link>
            <Link to="/feedback" onClick={toggleDropdown}>Mock Behavioral Interview Feedback</Link>
            <Link to="/resources" onClick={toggleDropdown}>Interview Resources</Link>
            <Link to="/zoomMeeting" onClick={toggleDropdown}>Zoom Meeting</Link>
            {/* <Link to="/ranking" onClick={toggleDropdown}>Ranking System</Link> */}
          </div>
        )}
      </div>

      <Stack
        sx={{
          display: 'inline-flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <img
            src='../src/assets/capstone-transp-logo.png'
            alt='AceIt Logo'
            width='45px'
          />
        </Box>
        <Typography
          color='primary'
          sx={{
            fontFamily: 'Reddit Mono',
            fontWeight: 900,
            fontSize: '2rem',
          }}
        >
          Ace
        </Typography>

        <Typography
          color='secondary.dark'
          sx={{
            fontFamily: 'Reddit Mono',
            fontWeight: 900,
            fontSize: '2rem',
          }}
        >
          It
        </Typography>
      </Stack>

      <div className='login-signup'>
        <button
          onClick={user ? handleLogout : signInWithGoogle}
          className='button login-signup-button'
        >
          {user ? `LOGOUT` : `LOGIN / SIGN UP`}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
