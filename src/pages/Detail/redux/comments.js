// Libs
import { createReducer, createActions } from 'reduxsauce'
import Immutable, { merge } from 'seamless-immutable'

// Helps
import { convertDataForComments, convertDataForComment } from '../../../helpers'

export const { Types, Creators } = createActions({
  getCommentsRequest: ['videoId'],
  getCommentsSuccess: ['comments'],
  getCommentsFailure: ['error'],

  postCommentRequest: ['commentData'],
  postCommentSuccess: ['comment'],
  postCommentFailure: ['error']
})

const INITIAL_STATE = Immutable({
  fetching: false,
  comments: [],
  error: null,
  type: null
})

const getCommentsRequest = (state = INITIAL_STATE, action) =>
  merge(state, { type: action.type, fetching: true, error: null })

const getCommentsSuccess = (state = INITIAL_STATE, action) => {
  const comments = convertDataForComments(action.comments)

  return merge(state, { type: action.type, fetching: false, comments })
}

const getCommentsFailure = (state = INITIAL_STATE, action) =>
  merge(state, {
    type: action.type,
    fetching: false,
    comments: [],
    error: action.error
  })

const postCommentRequest = (state = INITIAL_STATE, action) =>
  merge(state, { type: action.type, fetching: true, error: null })

const postCommentSuccess = (state = INITIAL_STATE, action) => {
  const comment = convertDataForComment(action.comment)

  return merge(state, {
    type: action.type,
    fetching: false,
    comments: [comment, ...state.comments]
  })
}

const postCommentFailure = (state = INITIAL_STATE, action) =>
  merge(state, {
    type: action.type,
    fetching: false,
    comments: [],
    error: action.error
  })

export default createReducer(INITIAL_STATE, {
  [Types.GET_COMMENTS_REQUEST]: getCommentsRequest,
  [Types.GET_COMMENTS_SUCCESS]: getCommentsSuccess,
  [Types.GET_COMMENTS_FAILURE]: getCommentsFailure,

  [Types.POST_COMMENT_REQUEST]: postCommentRequest,
  [Types.POST_COMMENT_SUCCESS]: postCommentSuccess,
  [Types.POST_COMMENT_FAILURE]: postCommentFailure
})
