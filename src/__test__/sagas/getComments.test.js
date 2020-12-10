// Libs
import { takeLatest } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'

// Constants
import { COMMENT_THREADS_URL } from '../../constants/api'

// Redux
import { Types } from '../../pages/Detail/redux/comments'

// API
import { getAPI } from '../../api/youtube'

// Sagas
import {
  getCommentsSaga,
  getComments
} from '../../pages/Detail/sagas/getComments'

// params
const params = {}
params.part = 'snippet,replies'
params.videoId = 'Ly2-6k226-Q'
params.key = process.env.REACT_APP_API_KEY

const mockComments = {
  data: {
    items: [
      {
        id: '10Ewq11',
        kind: 'youtube#commentThread',
        snippet: {}
      }
    ],
    status: 200
  }
}

describe('Get comments saga', () => {
  it('Should call getCommentsRequest', () => {
    const comments = getCommentsSaga()
    const expectedYield = takeLatest(Types.GET_COMMENTS_REQUEST, getComments)
    const actualYield = comments.next().value

    expect(JSON.stringify(actualYield)).toEqual(JSON.stringify(expectedYield))
  })

  it('Should call getCommentsSuccess', () => {
    const comments = []

    expectSaga(getComments, mockComments)
      .provide([
        [matchers.call.fn(getAPI(COMMENT_THREADS_URL, params)), mockComments]
      ])
      .put({
        type: Types.GET_COMMENTS_SUCCESS,
        comments
      })
      .dispatch({ type: Types.GET_COMMENTS_REQUEST })
      .run()
  })

  it('Should return a getCommentsFailure', () => {
    const error = new Error('error')

    expectSaga(getCommentsSaga)
      .provide([[matchers.call.fn(getComments), throwError(error)]])
      .put({
        type: Types.GET_COMMENTS_FAILURE,
        error
      })
      .dispatch({ type: Types.GET_COMMENTS_REQUEST })
      .run()
  })
})
