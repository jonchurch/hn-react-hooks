import React from 'react'
import renderHTML from 'react-render-html'

import { useItemSubscription } from '../hooks'
import Comment from './Comment'

export default function Item({match}) {
	const id = match.params.id
	const { title, url, text, kids, score } = useItemSubscription(id)
	return (
		<div>
			{
				url ? <a href={url}><h1>{title}</h1></a> :
							<h1>{title}</h1>
			}
			<p>{score}</p>
			{
				text ?
					renderHTML(text) : null
			}
			{
				kids && kids.length ? 
					kids.map(Comment) : null
			}
	</div>
	)
}
