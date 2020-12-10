// Libs
import { takeLatest, put } from 'redux-saga/effects'

// Constants
import { COMMENT_THREADS_URL } from '../../../constants/api'

// Types action
import { Types } from '../redux/comments'

// Handle API
import { getAPI } from '../../../api/youtube'

export function* getComments(data = {}) {
  try {
    const params = {}
    params.part = 'snippet,replies'
    params.videoId = data.videoId
    params.key = process.env.REACT_APP_API_KEY

    // get list comments by id
    const response = yield getAPI(COMMENT_THREADS_URL, params)

    if (response.status === 200) {
      yield put({
        type: Types.GET_COMMENTS_SUCCESS,
        comments: response.data.items
      })
    } else {
      yield put({
        type: Types.GET_COMMENTS_FAILURE,
        error: response.data.errors
      })
    }
  } catch (error) {
    yield put({ type: Types.GET_COMMENTS_FAILURE, error })
  }
}

export function* getCommentsSaga() {
  yield takeLatest(Types.GET_COMMENTS_REQUEST, getComments)
}
