import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'

import { useTopStories } from '../hooks'
import NewsCard from './NewsCard.jsx'

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
		color: #d3d3d3;
	}
`
const ListNav = ({ filter, page, maxPages })=> {
	return (
		<div className="list-nav">
			<Link 
				to={`/${filter}/${page - 1}`}
				className={page <= 1 ? "disabled" : null}
			>&lt; prev</Link>
		<span>
			{page}/{maxPages}
		</span>
		<Link 
			to={`/${filter}/${Number(page) + 1}`}
			className={page >= maxPages ? "disabled" : null}
		>next &gt;</Link>
		</div>
	)
}

export default function Home({history, match}) {
	console.log({match})
	const pathReg = new RegExp(/^\/(\w+)/)
	// lol this is a lil gross
	const filter = pathReg.test(match.url) ? pathReg.exec(match.url)[1] : "top"
	const page = match.params.page || 1
	const [stories, maxPages] = useTopStories(filter, page)
	if (page > maxPages || page < 1) {
		// redirect if something funky goes on with our page number
		return <Redirect to={`/${filter}`} />
	}
	return (
		<Container style={{position: "relative"}}>
			{
				maxPages > 1 ? 
				<ListNav filter={filter} page={page} maxPages={maxPages} />
				: null
			}
		<div className="list">
			{
				stories.length && 
				stories.map(id => <NewsCard id={id} key={id}/>)
			}
		</div>
</Container>
	)	
}
