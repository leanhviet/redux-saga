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
import { postAPI } from '../../api/youtube'

// Sagas
import {
  postCommentSaga,
  postComment
} from '../../pages/Detail/sagas/postComment'

// params
const topLevelComment = {}
topLevelComment.snippet = {
  textOriginal: 'nice video'
}

const snippet = {}
snippet.videoId = 'Ly2-6k226-Q'
snippet.topLevelComment = topLevelComment

const mockComment = {
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

describe('Post comments saga', () => {
  it('Should call postCommentRequest', () => {
    const comment = postCommentSaga()
    const expectedYield = takeLatest(Types.POST_COMMENT_REQUEST, postComment)
    const actualYield = comment.next().value

    expect(JSON.stringify(actualYield)).toEqual(JSON.stringify(expectedYield))
  })

  it('Should call postCommentSuccess', () => {
    const comment = {}
    const commentParams = {
      commentData: {
        text: 'viet',
        videoId: 'Ly2-6k226-Q'
      }
    }

    expectSaga(postComment, mockComment)
      .provide([
        [matchers.call.fn(postAPI(COMMENT_THREADS_URL, snippet)), mockComment]
      ])
      .put({
        type: Types.POST_COMMENTS_SUCCESS,
        comment
      })
      .dispatch({ type: Types.POST_COMMENTS_REQUEST })
      .run()
  })

  it('Should return a postCommentFailure', () => {
    const error = new Error('error')

    expectSaga(postCommentSaga)
      .provide([
        [
          matchers.call.fn(postAPI(COMMENT_THREADS_URL, snippet)),
          throwError(error)
        ]
      ])
      .put({
        type: Types.POST_COMMENT_FAILURE,
        error
      })
      .dispatch({ type: Types.POST_COMMENT_REQUEST })
      .run()
  })
})
