import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export default function NewsCard(props) {
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
					<p>{props.title}</p>
					{props.domain}	
			</span>
				<p>by {props.author} {props.postedAt} | {props.commentCount ? `${props.commentCount} comments`: null}</p>
			</div>
		</div>
	)
}

