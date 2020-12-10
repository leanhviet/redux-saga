// @flow
import React from 'react'

// Components
import Profile from '../Profile'

type Props = {
  comment: Object
}

const Comment = (props: Props) => {
  const { src, name, content, likeNumber, dislikeNumber } = props.comment

  return (
    <div className="comment">
      <Profile src={src} name={name} subName={content} />
      <div className="text-right comment__menu">
        <span className="comment__menu__icon">
          {likeNumber}
          <i className="fa fa-thumbs-up" />
        </span>
        <span className="comment__menu__icon">
          <i className="fa fa-thumbs-down" />
          {dislikeNumber}
        </span>
        <span className="comment__menu__icon">reply</span>
      </div>
    </div>
  )
}

Comment.defaultProps = {
  comment: {
    src: '',
    name: 'Le Anh Viet',
    content: '',
    likeNumber: '100',
    dislikeNumber: '50'
  }
}

export default Comment
