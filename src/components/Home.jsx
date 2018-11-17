import React from 'react'
import { Link } from 'react-router-dom'
import { Flipper, Flipped } from 'react-flip-toolkit'
import styled from 'styled-components'

import { useTopStories } from '../hooks'
import NewsCard from './NewsCard.jsx'

function storyFilter(path) {
	switch (path) {
		case "new":
			return "newstories"
		case "show":
			return "showstories"
		case "ask":
			return "askstories"
		case "jobs":
			return "jobstories"
		case "best":
			return "beststories"
		case "top":
		default:
			return "topstories"
	}
}
const Container = styled.div`
	position: relative;
	
	.list-nav {
		background-color: #fff;
		border-radius: 2px;
		padding: 15px 30px;
		position: fixed;
		text-align: center;
		top: 55px;
		left: 0;
		right: 0;
		z-index: 998
		box-shadow: 0 1px 2px rgba(0,0,0,.1);

		a {
			margin: 0 1em;
		}
	}

	.list {
		padding-top: 100px;
		position: absolute;
		margin: 30px 0
	}
	@media (max-width: 600px) {
		.list {
			margin: 10px 0
		}
	}
	.disabled {
		pointer-events: none;
		color: grey
	}
`

export default function Home({match}) {
	const path = match.path.substring(1)
	const page = match.params.page || 1
	console.log(typeof page)
	let filter = storyFilter(path)
	const stories = useTopStories(filter, page)
	return (
		<Container style={{position: "relative"}}>
			<div className="list-nav">
				<Link 
					to={`/top/${page - 1}`}
					className={page <= 1 ? "disabled" : null}
				>&lt; prev</Link>
			<span>
				{page} / 24
			</span>
			<Link to={`/top/${Number(page) + 1}`}>next &gt;</Link>
			</div>
		<Flipper flipKey={filter}>
		<div className="list">
			{
				stories.length > 0 && 
				stories.map(id => {
					return (
						<Flipped key={id} flipId={id.toString()}>
						<NewsCard id={id} />
					</Flipped>
						)
				})
			}
		</div>
	</Flipper>
</Container>
	)	
}
