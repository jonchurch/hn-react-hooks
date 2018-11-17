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

export function useTopStories(filter, page = 1) {
	const [stories, setStories] = useState({})
	const maxPerPage = 20
	const start = maxPerPage * (page - 1)
	const end = start + maxPerPage
	console.log({start,end})
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
	}, [filter, page])
	return stories
}
