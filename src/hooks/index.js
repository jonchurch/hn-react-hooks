import { useState, useEffect } from 'react'
import { itemRef, storiesRef } from '../firebase'

const WHOSHIRING_URL = "https://hn.algolia.com/api/v1/search_by_date?tags=story,author_whoishiring"

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

export function useHiringRequest() {
	const [hiring, setHiring] = useState([])
	// const freelance = new RegExp(/^Ask HN: Freelancer\?/)
	// const wanted  = new RegExp(/^Ask HN: Who is hiring\?/)
	// const fulltime = new RegExp(/^Ask HN: Who wants to be hired\?/)
	// const checkFreelance = obj => freelance.test(obj.title)
	
	useEffect(async () => {
		const res = await fetch(WHOSHIRING_URL).then(res => res.json())
		// console.log({res})
		const posts = res.hits.slice(0,3)
		setHiring(posts)
	},[])

	return hiring
}

export function useTopStories(filter, page = 1) {
	const refPath = storyFilter(filter)
	const [stories, setStories] = useState([])
	const [maxPages, setMaxPages] = useState(1)
	const maxPerPage = 40
	const start = maxPerPage * (page - 1)
	const end = start + maxPerPage
	useEffect(() => {
		const ref = storiesRef(refPath)
		ref.on('value', snapshot => {
			const ids = snapshot.val()
			const page = ids.slice(start, end)
			console.log('LIST LENGTH:',snapshot.val().length)
			setStories(page)
			setMaxPages(Math.ceil(ids.length / maxPerPage))
		})
		return () => {
			ref.off()
		}
	}, [filter, page])
	return [stories, maxPages]
}
function storyFilter(path) {
	switch (path) {
		case "new":
			return "newstories"
		case "show":
			return "showstories"
		case "ask":
			return "askstories"
		case "jobs":
			return "jobstories"
		case "best":
			return "beststories"
		case "top":
		default:
			return "topstories"
	}
}
