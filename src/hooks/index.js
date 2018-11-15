import { useState, useEffect } from 'react'
import { itemRef, storiesRef } from '../firebase'

export function useItemSubscription(id) {
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

export function useTopStories(filter) {
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