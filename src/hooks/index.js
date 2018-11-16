import { useState, useEffect } from 'react'
import { itemRef, storiesRef } from '../firebase'

export function useItemSubscription(id) {
	const [story, setStory] = useState({})

	useEffect(() => {
		const ref = itemRef(id)
		ref.on('value', snapshot => {
			// console.log('snapshot val:',snapshot.val())
			const val = snapshot.val()
			if (val !== null) {
				setStory(snapshot.val())
			}
		})
		return () => {
			ref.off()
		}
	}, [id])
	return story
}

export function useTopStories(filter, page = 0) {
	const [stories, setStories] = useState({})
	const maxPerPage = 30
	const start = maxPerPage * page
	const end = start + maxPerPage
	useEffect(() => {
		const ref = storiesRef(filter)
		ref.on('value', snapshot => {
			console.log({start, end})
			const ids = snapshot.val().slice(start, end)
			setStories(ids)
		})
		return () => {
			ref.off()
		}
	}, [filter])
	return stories
}
