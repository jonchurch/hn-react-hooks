import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export default function NewsCard(props) {
	const [story, setStory] = useState({})

	return (
		<div key={props.id}>
			<div style={{
				padding: "20px",
				display: "inline-block"
			}}>
			{props.score}
			</div>
			<div style={{display: "inline-block"}}>
				<span>
					<a href={props.url}>{props.title}</a>
					({props.url})
			</span>
				<p>by {props.by} {props.time} | {props.descendants ? `${props.descendants} comments`: null}</p>
			</div>
		</div>
	)
}

