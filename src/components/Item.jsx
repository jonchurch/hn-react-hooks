import React, { useState, useEffect } from 'react'

import { itemRef } from '../firebase'

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

export default function Item({match}) {
	const id = match.params.id
	const story = useItemSubscription(id)
	console.log({story})
	return (
		<div>
			{
				story.url ? <a href={story.url}>{story.title}</a> :
							<p>{story.title}</p>
			}
		{story.text ? story.text : null}
	</div>
	)
}
