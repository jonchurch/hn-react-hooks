import React from 'react'
import renderHTML from 'react-render-html'

import { useItemSubscription } from '../hooks'
import Comment from './Comment'

export default function Item({match}) {
	const id = match.params.id
	const { title, url, text, kids } = useItemSubscription(id)
	return (
		<div>
			{
				url ? <a href={url}>{title}</a> :
							<p>{title}</p>
			}
			{
				text ?
					renderHTML(text) : null}
			{
				kids && kids.length ? 
					kids.map(Comment) : null
			}
	</div>
	)
}
