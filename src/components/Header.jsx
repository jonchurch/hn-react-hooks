import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ListItem = styled.li`
	display: inline-block;
	color: white;
	text-align: center;
	font-size: 16px;
	font-weight: 400px;
	line-height: 1.2;
	`;

const UL= styled.ul`
	align-items: center;
	margin: auto;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	overflow: hidden;
`

const StyledHeader = styled.header`
	background-color: #ff6600;
	z-index: 999;
	height: 55px;
	top: 0;
	left: 0;
	right: 0;

	.inner {
		max-width: 800px;
		box-sizing: border-box;
		margin: 0px auto;
		padding: 15px 5px;
	}
	a {
		color: rgba(255, 255, .8);
		line-height: 24px;
		vertical-align: middle;
		letter-spacing: .075em;
	}
`

export default function Header() {
	return (
		<StyledHeader>
		<nav className="inner" >
				<UL>
					<Link to="/"><ListItem>Home</ListItem></Link>
					<Link to="/new"><ListItem>New</ListItem></Link>
					<Link to="/show"><ListItem>Show</ListItem></Link>
					<Link to="/ask"><ListItem>Ask</ListItem></Link>
					<Link to="/jobs"><ListItem>Jobs</ListItem></Link>
				</UL>
		</nav>
		</StyledHeader>
	)
}

