// Libs
import { takeLatest, put } from 'redux-saga/effects'

// Constants
import { VIDEOS_URL, PART } from '../../../constants/api'

// Types action
import { Types } from '../redux/videoInfoBox'

// Handle API
import { getAPI } from '../../../api/youtube'

export function* getVideoInfo(data = {}) {
  try {
    const params = {}
    params.part = PART
    params.id = data.id
    params.key = process.env.REACT_APP_API_KEY

    const response = yield getAPI(VIDEOS_URL, params)

    if (response.status === 200) {
      yield put({
        type: Types.GET_VIDEO_BY_ID_SUCCESS,
        video: response.data.items[0]
      })
    } else {
      yield put({
        type: Types.GET_VIDEO_BY_ID_FAILURE,
        error: response.data.errors
      })
    }
  } catch (error) {
    yield put({ type: Types.GET_VIDEO_BY_ID_FAILURE, error })
  }
}

export function* getVideoInfoSaga() {
  yield takeLatest(Types.GET_VIDEO_BY_ID_REQUEST, getVideoInfo)
}
