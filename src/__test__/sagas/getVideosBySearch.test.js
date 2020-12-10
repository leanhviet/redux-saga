// Libs
import { takeLatest } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'

// Constants
import { VIDEOS_URL, PART } from '../../constants/api'

// Redux
import { Types } from '../../pages/Search/redux/cards'

// API
import { getAPI } from '../../api/youtube'

// Sagas
import {
  getVideosFromSearchSaga,
  getVideosFromSearch
} from '../../pages/Search/sagas/getVideosBySearch'

// params
const params = {}
params.part = PART
params.id = 'FN7ALfpGxiI,WX7dUj14Z00,11B0X6o4h44,lmFyxmJiYF4'
params.key = process.env.REACT_APP_API_KEY

const mockVideos = {
  data: {
    items: [
      {
        contentDetails: {},
        id: 'knW7-x7Y7RE',
        kind: 'youtube#video',
        snippet: {},
        statistics: {}
      }
    ],
    status: 200
  }
}

describe('Get videos from search saga', () => {
  it('Should call getVideosByKeyWordRequest', () => {
    const videos = getVideosFromSearchSaga()
    const expectedYield = takeLatest(
      Types.GET_VIDEOS_BY_KEY_WORD_REQUEST,
      getVideosFromSearch
    )
    const actualYield = videos.next().value

    expect(JSON.stringify(actualYield)).toEqual(JSON.stringify(expectedYield))
  })

  it('Should call getVideosByKeyWordSuccess', () => {
    const videos = []

    expectSaga(getVideosFromSearch, mockVideos)
      .provide([[matchers.call.fn(getAPI(VIDEOS_URL, params)), mockVideos]])
      .put({
        type: Types.GET_VIDEOS_BY_KEY_WORD_SUCCESS,
        videos
      })
      .dispatch({ type: Types.GET_VIDEOS_BY_KEY_WORD_REQUEST })
      .run()
  })

  it('Should return a getVideosByKeyWordFailure', () => {
    const error = new Error('error')

    expectSaga(getVideosFromSearchSaga)
      .provide([[matchers.call.fn(getVideosFromSearch), throwError(error)]])
      .put({
        type: Types.GET_VIDEOS_BY_KEY_WORD_FAILURE,
        error
      })
      .dispatch({ type: Types.GET_VIDEOS_BY_KEY_WORD_REQUEST })
      .run()
  })
})
