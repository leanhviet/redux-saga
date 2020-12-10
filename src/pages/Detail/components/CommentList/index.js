// @flow
import React, { useEffect, useState } from 'react'

// Constants
import { USER_KEY } from '../../../../constants/localStorage'

// Storage
import { getStorage } from '../../../../utils/storage'

// Component
import Comment from '../../../../components/Comment'
import Input from '../../../../components/Input'
import Indicator from '../../../../components/Indicator'
import Alert from '../../../../components/Alert'

type Props = {
  detailData: Object,
  getCommentsRequest: Function,
  videoId: string,
  postCommentRequest: Function
}

const CommentList = (props: Props) => {
  const { detailData, getCommentsRequest, videoId, postCommentRequest } = props
  const { fetching, comments } = detailData.commentData
  const [isShowAlert, setShowAlert] = useState(false)

  useEffect(() => {
    videoId && getCommentsRequest(videoId)
  }, [videoId, getCommentsRequest, isShowAlert])

  const onHandleComment = val => {
    const commentData = {}
    commentData.text = val
    commentData.videoId = videoId

    getStorage(USER_KEY) ? postCommentRequest(commentData) : setShowAlert(true)
  }

  if (fetching) return <Indicator />

  return (
    <div className="comment-list">
      <Input
        placeholder="Add a public comment..."
        className="comment-list__text-comment"
        handleOnKeyDown={onHandleComment}
      />
      {comments &&
        comments.map(comment => (
          <div key={comment.id} className="comment-list__row">
            <Comment comment={comment} />
          </div>
        ))}
      {isShowAlert && <Alert isShowAlert={true} />}
    </div>
  )
}

CommentList.defaultProps = {
  detailData: {
    commentData: {
      comments: [],
      fetching: false
    }
  },
  getCommentsRequest: () => {},
  videoId: '',
  postCommentRequest: () => {}
}

export default CommentList
