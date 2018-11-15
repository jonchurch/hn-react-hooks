import React  from 'react'
import renderHTML from 'react-render-html'

import { timeAgo } from '../helpers'
import { useItemSubscription } from '../hooks'

export default function Comment(id) {
	const comment = useItemSubscription(id)
	if (comment.deleted) {
		return (
			<div key={id}>[deleted]</div>
		)
	}
	if (comment.dead) {
		return (
			<div key={id}>[dead]</div>
		)
	}
	return (
		<div 
			key={id}
			style={{marginLeft: "1.5em"}}
		>
			<p>{comment.by} {comment.time && timeAgo(comment.time)} ago</p>
			{comment.text && renderHTML(comment.text)}
			<div>
			{
				//comment.kids && comment.kids.length > 0 && comment.kids.map(Comment)
			}
			</div>
		</div>
	)
}
