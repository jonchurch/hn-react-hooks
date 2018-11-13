import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { storiesRef, fetchItems } from '../firebase'
import NewsCard from './NewsCard.jsx'

function useTopStories(filter) {
	const [stories, setStories] = useState({})
	useEffect(() => {
		const ref = storiesRef(filter).on('value', snapshot => {
			const ids = snapshot.val().slice(0, 30)
			setStories(ids)
		})
		return () => {
			//cleanup listener we started
			ref.off()
		}
	}, [])
	return stories
}

export default function Home() {
	const stories = useTopStories("topstories")
	return (
		<div>
			{
				stories.length > 0 && stories.map(NewsCard)
			}
		</div>
	)	
}
