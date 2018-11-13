import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ListItem = styled.li`
	display: inline-block;
	color: white;
	text-align: center;
	font-size: 16px;
	font-weight: 400px;
	letter-spacing: 0px;
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

export default function Header() {
	return (
		<header style={{
	backgroundColor: "rgba(239, 99, 48, 1.00)",
	overflow: "visible"
}}>
		<nav style={{height: "50px"}}>
				<UL>
					<ListItem><Link to="/">Home</Link></ListItem>
					<ListItem>New</ListItem>
					<ListItem>Show</ListItem>
					<ListItem>Ask</ListItem>
					<ListItem>Jobs</ListItem>
				</UL>
		</nav>
		</header>
	)
}

