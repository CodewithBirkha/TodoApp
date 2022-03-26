import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header>
			<h2>Shopping List App</h2>
             <Link to = '/' className='home-link'>Home</Link>
			<Link to ='/about' className='about-link'>About</Link>

		</header>
	)
}

export default Header
