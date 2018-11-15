import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { itemRef } from '../firebase'
import { host, timeAgo } from '../helpers'

function useItemSubscription(id) {
	const [story, setStory] = useState({})

	useEffect(() => {
		// console.log('itemsub useEffect running')
		const ref = itemRef(id)
		ref.on('value', snapshot => {
			console.log(snapshot.val())
			setStory(snapshot.val())
		})
		return () => {
			ref.off()
		}
	}, [id])
	return story
}

export default function NewsCard(id) {
	const story = useItemSubscription(id)
	return (
		<div key={id}>
			<div style={{
				padding: "20px",
				display: "inline-block"
			}}>
			{story.score}
			</div>
			<div style={{display: "inline-block"}}>
				<span>
					<a 
						href={story.url}
						style={{textDecoration: "none", color: "#000"}}
					>{story.title}</a>
					{story.url ? ` (${host(story.url)})` : null }
			</span>
			<p
				style={{color: "#828282"}}
			>by {story.by} {timeAgo(story.time)} | <a href={`item/${story.id}`}>{story.descendants ? `${story.descendants} comments`: "discuss"}</a></p>
			</div>
		</div>
	)
}

