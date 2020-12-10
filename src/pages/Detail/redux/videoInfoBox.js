// Libs
import { createReducer, createActions } from 'reduxsauce'
import Immutable, { merge } from 'seamless-immutable'

import { convertDataForVideoDetail } from '../../../helpers'

export const { Types, Creators } = createActions({
  getVideoByIDRequest: ['id'],
  getVideoByIDSuccess: ['video'],
  getVideoByIDFailure: ['error']
})

const INITIAL_STATE = Immutable({
  fetching: false,
  video: {},
  error: null,
  type: null
})

const getVideoByIDRequest = (state = INITIAL_STATE, action) =>
  merge(state, { type: action.type, fetching: true, error: null })

const getVideoByIDSuccess = (state = INITIAL_STATE, action) => {
  const video = convertDataForVideoDetail(action.video)

  return merge(state, { type: action.type, fetching: false, video })
}
const getVideoByIDFailure = (state = INITIAL_STATE, action) =>
  merge(state, {
    type: action.type,
    fetching: false,
    video: {},
    error: action.error
  })

export default createReducer(INITIAL_STATE, {
  [Types.GET_VIDEO_BY_ID_REQUEST]: getVideoByIDRequest,
  [Types.GET_VIDEO_BY_ID_SUCCESS]: getVideoByIDSuccess,
  [Types.GET_VIDEO_BY_ID_FAILURE]: getVideoByIDFailure
})
