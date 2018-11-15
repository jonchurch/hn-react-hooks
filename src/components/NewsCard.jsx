import React from 'react'
import styled from 'styled-components'

import { host, timeAgo } from '../helpers'
import { useItemSubscription } from '../hooks'

const StyledItemCard = styled.div`
	background-color: #fff;
	padding: 20px 30px 20px 80px;
	line-height: 20px;
	position: relative;
	border-bottom: 1px solid #eee

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
	.meta, .host {
		font-size: .85em;
		color: #828282;
		a {
			color: #828282;
			text-decoration: underline;
			&:hover {
				color: #ff6600
			}
		}
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
					<a 
						href={story.url}
					>{story.title}</a>
					{story.url ? <span className="host">{` (${host(story.url)})`}</span> : null }
				</span>
				<br />
			<span
				className="meta"
			>by {story.by} {timeAgo(story.time)} | <a href={`item/${story.id}`}>{story.descendants ? `${story.descendants} comments`: "discuss"}</a></span>
		</StyledItemCard>
	)
}

