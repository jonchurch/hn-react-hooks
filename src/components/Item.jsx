import React from 'react'


export default function Item({match}) {
	const id = match.params.id
	return (
		<p>{id}</p>
	)
}
