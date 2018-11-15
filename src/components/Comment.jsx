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
/*
 * Right now I think I'm running into issues where using hooks in my map is screwing something up
 * It might just be the conditional expression?
*/
export default function Comment({id}) {
	const { by, time, text, kids = [], deleted, dead } = useItemSubscription(id)
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
			<div>
				{
					kids.length ? kids.map(id => <Comment id={id} />) : null
				}
			</div>
		</CommentContainer>
	)
}

