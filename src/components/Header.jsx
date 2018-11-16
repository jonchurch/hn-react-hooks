import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'

import Logo from '../logo.png'

const StyledHeader = styled.header`
	background-color: #ff6600;
	z-index: 999;
	height: 55px;
	top: 0;
	left: 0;
	right: 0;

	.inner {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		max-width: 800px;
		box-sizing: border-box;
		margin: 0px auto;
		padding: 15px 5px;
	}
	.logo {
		width: 24px;
		display: inline-block;
		vertical-align: middle;
	}
	a {
		color: white;
		font-weight: 300;
		line-height: 24px;
		letter-spacing: .075em;
		vertical-align: middle;
		margin-right: 1.8em;
	}
	.active {
		font-weight: 600;
	}
	@media (max-width: 600px) {
		.inner {
			padding: 15px;
		}
		a {
			margin-right: 1em;
		}
	}
`

export default function Header() {
	return (
		<StyledHeader>
			<nav className="inner" >
                <Link to={process.env.PUBLIC_URL + "/"}>
					<img src={Logo} alt="Hacker News Logo" className="logo"/>
				</Link>
				<NavLink exact to={process.env.PUBLIC_URL + "/"} activeClassName="active">Top</NavLink>
				<NavLink to={process.env.PUBLIC_URL + "/new"} activeClassName="active">New</NavLink>
				<NavLink to={process.env.PUBLIC_URL + "/show"} activeClassName="active">Show</NavLink>
				<NavLink to={process.env.PUBLIC_URL + "/ask"} activeClassName="active">Ask</NavLink>
				<NavLink to={process.env.PUBLIC_URL + "/jobs"} activeClassName="active">Jobs</NavLink>
		</nav>
		</StyledHeader>
	)
}

