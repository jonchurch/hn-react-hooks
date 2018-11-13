import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { storiesRef, fetchItems } from '../firebase'
import NewsCard from './NewsCard.jsx'

// need to sub to home page data, turn it into some tasty lil components down here

// const data = [
// 	{
// 		score: 12,
// 		id: "adfasfa",
// 		title: "90% Cleaner React Clone with hooks",
// 		domain: "jonchurch.com",
// 		postedAt: "6 hours ago",
// 		commentCount: "5"
// 	}
// ]

storiesRef("topstories").once('value', snapshot => {
	const ids = snapshot.val().slice(0, 30)
	// console.log(ids)
	fetchItems(ids, items => {
		console.log({items})
	})
})
export default function Home() {
	const [data, setData] = useState([])
	useEffect(() => {
		// setup firebase to listen to changes
	})
	return (
		<div>
			{
				data.length > 0 && data.map(NewsCard)
			}
		</div>
	)	
}
