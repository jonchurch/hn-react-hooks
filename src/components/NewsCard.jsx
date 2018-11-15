import React from 'react'
import styled from 'styled-components'

import { host, timeAgo } from '../helpers'
import { useItemSubscription } from '../hooks'

const StyledItemCard = styled.div`
	background-color: #fff;
	padding: 20px 30px 20px 80px;
	line-height: 20px;
	position: relative;

	.score {
		color: #f60;
		position: absolute;
		font-size: 1.1em;
		font-weight: 700;
		top: 50%;
		left: 0;
		width: 80px;
		margin-top: -10px;
		text-align: center;
	}
`

export default function NewsCard(id) {
	const story = useItemSubscription(id)
	return (
		<StyledItemCard key={id}>
			<span className="score">
			{story.score}
			</span>
			<span className="title">
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
			</span>
		</StyledItemCard>
	)
}

