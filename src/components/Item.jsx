import React from 'react'
import renderHTML from 'react-render-html'
import styled from 'styled-components'

import { timeAgo, host } from '../helpers'
import { useItemSubscription } from '../hooks'
import Comment from './Comment'

const ItemHeader = styled.div`
  background-color: #fff;
  padding: 1.8em 2em 1em;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);

  a {
	color: #34495e;
  }
  h1 {
    display: inline;
    font-size: 1.5em;
    margin: 0;
    margin-right: .5em;
  }
  .host, .meta, .meta a {
    color: #828282;
  }
  .meta a {
	text-decoration: underline;
	}
  @media (max-width: 600px) {
	h1 {
	 font-size: 1.25em;
	}
  }
`

const ItemComments = styled.div`
	background-color: #fff;
	margin-top: 10px;
	padding: 0 2em .5em;

	.comments-header {
		margin: 0;
		font-size: 1.1em;
		padding: 1em 0;
		position: relative;
	}

`

function LinkTitle(props) {
	const { url, title } = props
	console.log(url)
	return (
		<span>
		<a href={url}>
			<h1>{title}</h1>
		</a>
		<a className="host" href={url}>
			({host(url)})
		</a> 
	</span>
	)
}

export default function Item({match}) {
	const id = match.params.id
	const { title, by, url, score, time, text, kids = [], descendants} = useItemSubscription(id)
	return (
		<div>
			<ItemHeader>
				{
					url ? <LinkTitle url={url} title={title} /> :
								<h1>{title}</h1>
				}
				<p className="meta">
					{score && score} points | by {by && by} {time && timeAgo(time)} ago
				</p>
				{
					text ?
						<div className="ask-text">{renderHTML(text)}</div> : null
				}
			</ItemHeader>
			<ItemComments> 
				<div className="comments-header">
					{descendants && descendants > 0 ? `${descendants} comments` : "No comments"}
				</div>
			{
				kids.length ? 
					kids.map(Comment) : null
			}
		</ItemComments>
	</div>
	)
}
