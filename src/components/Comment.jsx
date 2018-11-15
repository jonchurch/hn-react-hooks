import React  from 'react'
import renderHTML from 'react-render-html'

import { timeAgo } from '../helpers'
import { useItemSubscription } from '../hooks'

export default function Comment(id) {
	const comment = useItemSubscription(id)
	console.log({comment})
	return (
		<div key={id}>
			<p>{comment.by} {comment.time && timeAgo(comment.time)}</p>
			{comment.text && renderHTML(comment.text)}
			<div>
			>>>>{comment.kids && comment.kids.length > 0 && comment.kids.map(Comment)}
			</div>
		</div>
	)
}
