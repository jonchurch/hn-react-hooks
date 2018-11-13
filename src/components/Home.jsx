import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { storiesRef, fetchItems } from '../firebase'
import NewsCard from './NewsCard.jsx'

// storiesRef("topstories").once('value', snapshot => {
// 	const ids = snapshot.val().slice(0, 30)
// 	// console.log(ids)
// 	fetchItems(ids, items => {
// 		console.log({items})
// 	})
// })

function useTopStories() {
	const [stories, setStories] = useState([])
	useEffect(() => {
		console.log('use effect running')
		storiesRef("topstories").on('value', snapshot => {
			const ids = snapshot.val().slice(0, 30)
			console.log(ids)
			// setStories(ids)
			console.log(ids)
			fetchItems(ids, items => {
				// console.log({items})
				setStories(items)
			})
		})
		return () => {
			//cleanup whatever listener we started
		}
	}, [])
	return stories
}

export default function Home() {
	const data = useTopStories()
	
	return (
		<div>
			{
				data.length > 0 && data.map(NewsCard)
			}
		</div>
	)	
}
