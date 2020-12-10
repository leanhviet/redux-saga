// Libs
import { takeLatest } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'

// Constants
import { VIDEOS_URL, PART } from '../../constants/api'

// Redux
import { Types } from '../../pages/Detail/redux/videoInfoBox'

// API
import { getAPI } from '../../api/youtube'

// Sagas
import {
  getVideoInfoSaga,
  getVideoInfo
} from '../../pages/Detail/sagas/getVideoInfoBox'

// params
const params = {}
params.part = PART
params.id = 'etn1tsINZbA'
params.key = process.env.REACT_APP_API_KEY

const mockVideo = {
  data: {
    items: [
      {
        id: 'etn1tsINZbA',
        kind: 'youtube#video',
        snippet: {},
        contentDetails: {},
        statistics: {}
      }
    ],
    status: 200
  }
}

describe('Get video info saga', () => {
  it('Should call getVideoByIDRequest', () => {
    const video = getVideoInfoSaga()
    const expectedYield = takeLatest(
      Types.GET_VIDEO_BY_ID_REQUEST,
      getVideoInfo
    )
    const actualYield = video.next().value

    expect(JSON.stringify(actualYield)).toEqual(JSON.stringify(expectedYield))
  })

  it('Should call getVideoByIDSuccess', () => {
    const video = []

    expectSaga(getVideoInfo, mockVideo)
      .provide([[matchers.call.fn(getAPI(VIDEOS_URL, params)), mockVideo]])
      .put({
        type: Types.GET_VIDEO_BY_ID_SUCCESS,
        video
      })
      .dispatch({ type: Types.GET_VIDEO_BY_ID_REQUEST })
      .run()
  })

  it('Should return a getVideoByIDFailure', () => {
    const error = new Error('error')

    expectSaga(getVideoInfoSaga)
      .provide([[matchers.call.fn(getVideoInfo), throwError(error)]])
      .put({
        type: Types.GET_VIDEO_BY_ID_FAILURE,
        error
      })
      .dispatch({ type: Types.GET_VIDEO_BY_ID_REQUEST })
      .run()
  })
})
