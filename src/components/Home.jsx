import React from 'react'
import { Link } from 'react-router-dom'

import NewsCard from './NewsCard.jsx'

// need to sub to home page data, turn it into some tasty lil components down here

const data = [
	{
		score: 12,
		id: "adfasfa",
		title: "90% Cleaner React Clone with hooks",
		domain: "jonchurch.com",
		postedAt: "6 hours ago",
		commentCount: "5"
	}
]
console.log(data.length)
console.log(data.length && true)

export default function Home() {
	return (
		<div>
			{
				data.length > 0 && data.map(NewsCard)
			}
		</div>
	)	
}
