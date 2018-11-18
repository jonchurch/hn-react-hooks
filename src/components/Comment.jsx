import React, { useState } from 'react'
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
	overflow-wrap: break-word;
	word-wrap: break-word;
	a:hover {
      color: #ff6600;
	}
	pre {
	  white-space: pre-wrap;
	}
  }
  .toggle {
	background-color: #fffbf2;
	padding: .3em .5em;
	border-radius: 4px;
	&.open {
		background-color: transparent;
	}
  }
`
const CommentChildren = styled.div`
	${props => props.open ? null : "display: none;"}
	margin-left: 1.25em;
`

function Toggle({open, onClick, kidCount }) {
	return (
		<span
			className={`toggle ${open ? "open" : null }`}
			onClick={onClick}
		>
		{ open ? "[-]" : `[+${kidCount + 1}]` }
		</span>
	)
}

/*
 * Right now I think I'm running into issues where using hooks in my map is screwing something up
 * It might just be the conditional expression?
 * Nope! It was because I was calling the function? and not using a component?
*/
export default function Comment({id}) {
	const { by, time, text, kids = [], deleted, dead } = useItemSubscription(id)
	const [showComments, setShowComments] = useState(true)
	function handleCommentToggle() {
		setShowComments(!showComments)
	}
	if (deleted) {
		kids.length && console.log('Deleted has children!')
		return (
			<CommentContainer>
				<div className="by">[deleted]</div>
			</CommentContainer>
		)
	}
	if (dead) {
		kids.length && console.log('Dead has children!')
		return (
			null
		)
	}
	return (
		<CommentContainer>
			<div className={`by toggle ${showComments ? "open" : null}`}>
				{by}
				{time && timeAgo(time)} ago
				<Toggle open={showComments} onClick={handleCommentToggle} kidCount={kids.length}/>
			</div>
			<CommentChildren open={showComments}>
			<div className="text">
			{text && renderHTML(text)}
		</div>
				{
					kids.length ? kids.map(id => <Comment key={id} id={id} />) : null
				}
			</CommentChildren>
		</CommentContainer>
	)
}

