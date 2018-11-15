import React from 'react'
import renderHTML from 'react-render-html'

import { timeAgo } from '../helpers'
import { useItemSubscription } from '../hooks'
import Comment from './Comment'

export default function Item({match}) {
	const id = match.params.id
	const { title, by, url, time, text, kids = [], score } = useItemSubscription(id)
	return (
		<div>
			{
				url ? <a href={url}><h1>{title}</h1></a> :
							<h1>{title}</h1>
			}
			<p>{score && score} points | by {by && by} {time && timeAgo(time)} ago</p>
			{
				text ?
					renderHTML(text) : null
			}
			<hr />
			{
				kids.length ? 
					kids.map(Comment) : null
			}
	</div>
	)
}
