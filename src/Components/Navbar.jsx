import React, { useState, useContext, useEffect } from 'react';
import './Navbar.css';
import './Button.css';
import { signInWithGoogle, logOut } from '../Services/Firebase.js';
import { UserContext } from '../Providers/UserProvider';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navigate = useNavigate();

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleLogout = () => {
		logOut();
		navigate('/');
	};

	const user = useContext(UserContext);
	console.log(user);

	return (
		<nav className='navbar'>
			{/* {user ? (
				<>
					<a href='/userDashboard' className='button'>
						Dashboard
					</a>
					<a href='/book-interview' className='button'>
						Book an Interview
					</a>
					<div className='logo'>AceIT</div>
					<a href='/resources' className='button'>
						Resources
					</a>
					<a href='/calendar2' className='button' onClick={toggleDropdown}>
						Calendar
					</a>
					<button onClick={handleLogout} className='button'>
						LOGOUT
					</button>
				</>
			) : ( */}
			<>
				<div className='menu-icon' onClick={toggleDropdown}>
					<div className='hamburger-icon'>
						<div className='line' />
						<div className='line' />
						<div className='line' />
					</div>

					{isOpen && (
						<div className='dropdown-menu'>
							<a href='/' onClick={toggleDropdown}>
								Home
							</a>
							<a href='/userDashboard' onClick={toggleDropdown}>
								Dashboard
							</a>
							<a href='/book-interview' onClick={toggleDropdown}>
								Book an Interview
							</a>
							<a href='/resources' onClick={toggleDropdown}>
								Resources
							</a>
						</div>
					)}
				</div>

				<div className='logo'>AceIT</div>

				<div className='login-signup'>
					<button
						onClick={user ? handleLogout : signInWithGoogle}
						className='button login-signup-button'
					>
						{user ? `LOGOUT` : `LOGIN / SIGN UP`}
					</button>
				</div>
			</>
			{/* )} */}
		</nav>
	);
};

export default Navbar;
