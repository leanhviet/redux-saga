// Libs
import { takeLatest } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'

// Constants
import { VIDEOS_URL, PART } from '../../constants/api'

// Redux
import { Types } from '../../pages/Detail/redux/relatedVideos'

// API
import { getAPI } from '../../api/youtube'

// Sagas
import {
  getRelatedVideosSaga,
  getRelatedVideos
} from '../../pages/Detail/sagas/getRelatedVideos'

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
        id: 'FN7ALfpGxiI',
        kind: 'youtube#video',
        snippet: {},
        statistics: {}
      }
    ],
    status: 200
  }
}

describe('Get related videos saga', () => {
  it('Should call getRelatedVideosRequest', () => {
    const videos = getRelatedVideosSaga()
    const expectedYield = takeLatest(
      Types.GET_RELATED_VIDEOS_REQUEST,
      getRelatedVideos
    )
    const actualYield = videos.next().value

    expect(JSON.stringify(actualYield)).toEqual(JSON.stringify(expectedYield))
  })

  it('Should call getRelatedVideosSuccess', () => {
    const videos = []

    expectSaga(getRelatedVideos, mockVideos)
      .provide([[matchers.call.fn(getAPI(VIDEOS_URL, params)), mockVideos]])
      .put({
        type: Types.GET_RELATED_VIDEOS_SUCCESS,
        videos
      })
      .dispatch({ type: Types.GET_RELATED_VIDEOS_REQUEST })
      .run()
  })

  it('Should return a getRelatedVideosFailure', () => {
    const error = new Error('error')

    expectSaga(getRelatedVideosSaga)
      .provide([[matchers.call.fn(getRelatedVideos), throwError(error)]])
      .put({
        type: Types.GET_RELATED_VIDEOS_FAILURE,
        error
      })
      .dispatch({ type: Types.GET_RELATED_VIDEOS_REQUEST })
      .run()
  })
})
