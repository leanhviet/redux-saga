// Libs
import { createReducer, createActions } from 'reduxsauce'
import Immutable, { merge } from 'seamless-immutable'

// Helpers
import { convertDataForVideoItem } from '../../../helpers'

export const { Types, Creators } = createActions({
  getVideosByKeyWordRequest: ['keyword'],
  getVideosByKeyWordSuccess: ['videos'],
  getVideosByKeyWordFailure: ['error']
})

const INITIAL_STATE = Immutable({
  fetching: false,
  videos: [],
  error: null,
  type: null
})

const getVideosByKeyWordRequest = (state = INITIAL_STATE, action) =>
  merge(state, { type: action.type, fetching: true, error: null })

const getVideosByKeyWordSuccess = (state = INITIAL_STATE, action) => {
  const videos = convertDataForVideoItem(action.videos)

  return merge(state, { type: action.type, fetching: false, videos })
}

const getVideosByKeyWordFailure = (state = INITIAL_STATE, action) =>
  merge(state, {
    type: action.type,
    fetching: false,
    videos: [],
    error: action.error
  })

export default createReducer(INITIAL_STATE, {
  [Types.GET_VIDEOS_BY_KEY_WORD_REQUEST]: getVideosByKeyWordRequest,
  [Types.GET_VIDEOS_BY_KEY_WORD_SUCCESS]: getVideosByKeyWordSuccess,
  [Types.GET_VIDEOS_BY_KEY_WORD_FAILURE]: getVideosByKeyWordFailure
})
