import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { itemRef } from '../firebase'

function useItemSubscription(id) {
	const [story, setStory] = useState({})

	useEffect(() => {
		// console.log('itemsub useEffect running')
		const ref = itemRef(id)
		ref.on('value', snapshot => setStory(snapshot.val()))

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
					<a href={story.url}>{story.title}</a>
					{story.url ? `(${story.url})` : null }
			</span>
				<p>by {story.by} {story.time} | {story.descendants ? `${story.descendants} comments`: null}</p>
			</div>
		</div>
	)
}

