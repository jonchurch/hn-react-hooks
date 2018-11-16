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
    overflow-wrap break-word
	a:hover {
      color #ff6600
	}
	pre {
	  white-space pre-wrap	
	}
  }
  .toggle {
	background-color: #fffbf2;
	padding: .3em .5em;
	border-radius: 4px;
	&.open {
		padding: 0;
		background-color: transparent;
		margin-bottom: -0.5em;
	}
  }
`
const CommentChildren = styled.div`
	${props => props.open ? null : "display: none;"}
	margin-left: 1.5em;
`

function Toggle({open, onClick, kidCount }) {
	return (
		<div 
			className={`toggle ${open ? "open" : null }`}
			onClick={onClick}
		>
		{ open ? "[-]" : `[+] ${kidCount} replies collapsed` }
		</div>
	)
}

/*
 * Right now I think I'm running into issues where using hooks in my map is screwing something up
 * It might just be the conditional expression?
 * Nope! It was because I was calling the function? and not using a component?
*/
export default function Comment({id}) {
	const { by, time, text, kids = [], deleted, dead } = useItemSubscription(id)
	const [isOpen, setOpen] = useState(true)
	function handleClick() {
		console.log('clicky click')
		setOpen(!isOpen)
	}
	if (deleted) {
		return (
			<div key={id}>[deleted]</div>
		)
	}
	if (dead) {
		return (
			<div key={id}>[dead]</div>
		)
	}
	return (
		<CommentContainer
			key={id}
		>
			<div className="by">
				{by}
				{time && timeAgo(time)} ago
			</div>
			<div className="text">
			{text && renderHTML(text)}
		</div>
		{
			kids.length ? <Toggle open={isOpen} onClick={handleClick} kidCount={kids.length}/> : null
		}
			<CommentChildren open={isOpen}>
				{
					kids.length ? kids.map(id => <Comment id={id} />) : null
				}
			</CommentChildren>
		</CommentContainer>
	)
}

