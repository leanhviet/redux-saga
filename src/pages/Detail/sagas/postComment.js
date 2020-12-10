// Libs
import { takeLatest, put } from 'redux-saga/effects'

// Constants
import { COMMENT_THREADS_URL } from '../../../constants/api'

// Types action
import { Types } from '../redux/comments'

// Handle API
import { postAPI } from '../../../api/youtube'

export function* postComment(data = {}) {
  try {
    const { text, videoId } = data.commentData || ''
    const topLevelComment = {}
    topLevelComment.snippet = {
      textOriginal: text
    }

    const snippet = {}
    snippet.videoId = videoId
    snippet.topLevelComment = topLevelComment

    // get list comments by id
    const response = yield postAPI(COMMENT_THREADS_URL, snippet)

    if (response.status === 200) {
      yield put({
        type: Types.POST_COMMENT_SUCCESS,
        comment: response.data
      })
    } else {
      yield put({
        type: Types.POST_COMMENT_FAILURE,
        error: response.data.errors
      })
    }
  } catch (error) {
    yield put({ type: Types.POST_COMMENT_FAILURE, error })
  }
}

export function* postCommentSaga() {
  yield takeLatest(Types.POST_COMMENT_REQUEST, postComment)
}
