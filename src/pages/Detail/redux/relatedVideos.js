// Libs
import { createReducer, createActions } from 'reduxsauce'
import Immutable, { merge } from 'seamless-immutable'

// Helpers
import { convertDataForVideoItem } from '../../../helpers'

export const { Types, Creators } = createActions({
  getRelatedVideosRequest: ['id'],
  getRelatedVideosSuccess: ['videos'],
  getRelatedVideosFailure: ['error']
})

const INITIAL_STATE = Immutable({
  fetching: false,
  videos: [],
  error: null,
  type: null
})

const getRelatedVideosRequest = (state = INITIAL_STATE, action) =>
  merge(state, { type: action.type, fetching: true, error: null })

const getRelatedVideosSuccess = (state = INITIAL_STATE, action) => {
  const videos = convertDataForVideoItem(action.videos)

  return merge(state, { type: action.type, fetching: false, videos })
}

const getRelatedVideosFailure = (state = INITIAL_STATE, action) =>
  merge(state, {
    type: action.type,
    fetching: false,
    videos: [],
    error: action.error
  })

export default createReducer(INITIAL_STATE, {
  [Types.GET_RELATED_VIDEOS_REQUEST]: getRelatedVideosRequest,
  [Types.GET_RELATED_VIDEOS_SUCCESS]: getRelatedVideosSuccess,
  [Types.GET_RELATED_VIDEOS_FAILURE]: getRelatedVideosFailure
})
