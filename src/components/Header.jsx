import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header>
		<nav>
			<Link to="/">
				<h1>Home</h1>
			</Link>
		</nav>
		</header>
	)
}
