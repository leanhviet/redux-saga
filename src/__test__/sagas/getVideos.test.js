// Libs
import { takeLatest } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'

// Constants
import { VIDEOS_URL, CHART, PART, MAX_RESULTS } from '../../constants/api'

// Redux
import { Types } from '../../pages/Home/redux/videos'

// API
import { getAPI } from '../../api/youtube'

// Sagas
import { getVideosSaga, getVideos } from '../../pages/Home/sagas/getVideos'

// params
const params = {}
params.key = process.env.REACT_APP_API_KEY
params.chart = CHART
params.part = PART
params.regionCode = 'VN'
params.maxResults = MAX_RESULTS

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

describe('Get videos saga', () => {
  it('Should call getVideosRequest', () => {
    const videos = getVideosSaga()
    const expectedYield = takeLatest(Types.GET_VIDEOS_REQUEST, getVideos)
    const actualYield = videos.next().value

    expect(JSON.stringify(actualYield)).toEqual(JSON.stringify(expectedYield))
  })

  it('Should call getVideosSuccess', () => {
    const videos = []

    expectSaga(getVideos, mockVideos)
      .provide([[matchers.call.fn(getAPI(VIDEOS_URL, params)), mockVideos]])
      .put({
        type: Types.GET_VIDEOS_SUCCESS,
        videos
      })
      .dispatch({ type: Types.GET_VIDEOS_REQUEST })
      .run()
  })

  it('Should return a getVideosFailure', () => {
    const error = new Error('error')

    expectSaga(getVideosSaga)
      .provide([[matchers.call.fn(getVideos), throwError(error)]])
      .put({
        type: Types.GET_VIDEOS_FAILURE,
        error
      })
      .dispatch({ type: Types.GET_VIDEOS_REQUEST })
      .run()
  })
})
