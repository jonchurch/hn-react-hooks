import React from 'react'

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

export default function Home({match}) {
	const path = match.path.substring(1)
	let filter = storyFilter(path)
	const stories = useTopStories(filter)
	return (
		<div style={{margin: "30px 0"}}>
			{
				stories.length > 0 && stories.map(NewsCard)
			}
		</div>
	)	
}
