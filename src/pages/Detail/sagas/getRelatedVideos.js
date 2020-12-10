// Libs
import { takeLatest, put } from 'redux-saga/effects'

// Constants
import {
  SEARCH_URL,
  VIDEOS_URL,
  PART,
  MAX_RESULTS,
  TYPE
} from '../../../constants/api'

// Types action
import { Types } from '../redux/relatedVideos'

// Handle API
import { getAPI } from '../../../api/youtube'

async function searchVideosById(id) {
  const params = {}
  params.part = 'snippet'
  params.maxResults = MAX_RESULTS
  params.relatedToVideoId = id
  params.type = TYPE
  params.key = process.env.REACT_APP_API_KEY

  return await getAPI(SEARCH_URL, params)
}

export function* getRelatedVideos(data = {}) {
  try {
    const dataSearchByKeyWord = yield searchVideosById(data.id) || {}
    const listID = []

    // get list id by searching
    dataSearchByKeyWord.data.items.map(value => {
      return listID.push(value.id.videoId)
    })

    // params
    const params = {}
    params.part = PART
    params.id = listID.toString()
    params.key = process.env.REACT_APP_API_KEY

    // get list videos by keyword
    const response = yield getAPI(VIDEOS_URL, params)

    if (response.status === 200) {
      yield put({
        type: Types.GET_RELATED_VIDEOS_SUCCESS,
        videos: response.data.items
      })
    } else {
      yield put({
        type: Types.GET_RELATED_VIDEOS_FAILURE,
        error: response.data.errors
      })
    }
  } catch (error) {
    yield put({ type: Types.GET_RELATED_VIDEOS_FAILURE, error })
  }
}

export function* getRelatedVideosSaga() {
  yield takeLatest(Types.GET_RELATED_VIDEOS_REQUEST, getRelatedVideos)
}
