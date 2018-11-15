import React  from 'react'
import renderHTML from 'react-render-html'
import styled from 'styled-components'

import { timeAgo } from '../helpers'
import { useItemSubscription } from '../hooks'

const CommentContainer = styled.div`
  background-color: #fff;
  border-top: 1px solid #eee;
  position: relative;
  .by, .text, .toggle {
    font-size: .9em;
	margin: 1em 0;
  }
  .by {
    color: #828282;
	a {
      color: #828282;
      text-decoration: underline;
	}
  }
  .text {
    overflow-wrap break-word
	a:hover {
      color #ff6600
	}
	pre {
	  white-space pre-wrap	
	}
  }
`

export default function Comment(id) {
	const comment = useItemSubscription(id)
	if (comment.deleted) {
		return (
			<div key={id}>[deleted]</div>
		)
	}
	if (comment.dead) {
		return (
			<div key={id}>[dead]</div>
		)
	}
	return (
		<CommentContainer
			key={id}
		>
			<div className="by">
				{comment.by}
				{comment.time && timeAgo(comment.time)} ago
			</div>
			<div className="text">
			{comment.text && renderHTML(comment.text)}
			</div>
			<div>
			{
				//comment.kids && comment.kids.length > 0 && comment.kids.map(Comment)
			}
			</div>
		</CommentContainer>
	)
}
