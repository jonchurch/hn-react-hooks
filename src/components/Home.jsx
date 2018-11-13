import React, { useState, useEffect } from 'react'

import { storiesRef } from '../firebase'
import NewsCard from './NewsCard.jsx'

function useTopStories(filter) {
	const [stories, setStories] = useState({})
	useEffect(() => {
		const ref = storiesRef(filter)
		ref.on('value', snapshot => {
			const ids = snapshot.val().slice(0, 30)
			setStories(ids)
		})
		return () => {
			//cleanup listener we started
			ref.off()
		}
	}, [filter])
	return stories
}

function storyFilter(path) {
	// wtf why doesnt this work?
	let filter = path === "" ? "top" : path
	return filter + "stories"
	// switch (path) {
	// 	case 1:
	// 		filter = "newstories"
	// 	case "show":
	// 		filter = "showstories"
	// 	case "ask":
	// 		filter = "askstories"
	// 	case "jobs":
	// 		filter = "jobstories"
	// 	case "best":
	// 		filter = "beststories"
	// 	default:
	// 		filter = "topstories"
	// }
	// if (path === "" || path === "top") {
	// 	filter = "topstories"
	// }
	// if (path === "new") {
	// 	filter = "newstories"
	// }
	// if (path === "show") {
	// 	filter = "showstories"
	// }
	// if (path === "ask") {
	// 	filter = "askstories"
	// }
	// if (path === "jobs") {
	// 	filter = "jobstories"
	// }
	// found an even lazier way
	// return filter 
}

export default function Home({match}) {
	const path = match.path.substring(1)
	let filter = storyFilter(path)
	console.log(filter)
	const stories = useTopStories(filter)
	return (
		<div>
			{
				stories.length > 0 && stories.map(NewsCard)
			}
		</div>
	)	
}
