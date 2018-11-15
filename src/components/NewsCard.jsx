import React from 'react'
// import styled from 'styled-components'

import { host, timeAgo } from '../helpers'
import { useItemSubscription } from '../hooks'

export default function NewsCard(id) {
	const story = useItemSubscription(id)
	return (
		<div key={id}>
			<div style={{
				padding: "20px",
				display: "inline-block"
			}}>
			{story.score}
			</div>
			<div style={{display: "inline-block"}}>
				<span>
					<a 
						href={story.url}
						style={{textDecoration: "none", color: "#000"}}
					>{story.title}</a>
					{story.url ? ` (${host(story.url)})` : null }
			</span>
			<p
				style={{color: "#828282"}}
			>by {story.by} {timeAgo(story.time)} | <a href={`item/${story.id}`}>{story.descendants ? `${story.descendants} comments`: "discuss"}</a></p>
			</div>
		</div>
	)
}

