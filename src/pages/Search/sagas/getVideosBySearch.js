// Libs
import { takeLatest, put } from 'redux-saga/effects'

// Constants
import {
  VIDEOS_URL,
  SEARCH_URL,
  PART,
  MAX_RESULTS,
  TYPE
} from '../../../constants/api'

// Types action
import { Types } from '../redux/cards'

// Handle API
import { getAPI } from '../../../api/youtube'

// get data from search url by keyword
async function getDataFromSearchURL(keyword) {
  // params
  const params = {}
  params.part = 'snippet'
  params.maxResults = MAX_RESULTS
  params.q = keyword
  params.type = TYPE
  params.key = process.env.REACT_APP_API_KEY

  return await getAPI(SEARCH_URL, params)
}

// worker saga for fetch data from search by keyword
export function* getVideosFromSearch(data = {}) {
  try {
    const dataSearchByKeyWord = yield getDataFromSearchURL(data.keyword) || {}
    const listID = []

    // get list id by searching
    dataSearchByKeyWord.data.items.map(value => listID.push(value.id.videoId))

    // params
    const params = {}
    params.part = PART
    params.id = listID.toString()
    params.key = process.env.REACT_APP_API_KEY

    // get list videos by keyword
    const getVideos = yield getAPI(VIDEOS_URL, params)

    if (getVideos.status === 200) {
      yield put({
        type: Types.GET_VIDEOS_BY_KEY_WORD_SUCCESS,
        videos: getVideos.data.items
      })
    } else {
      yield put({
        type: Types.GET_VIDEOS_BY_KEY_WORD_FAILURE,
        error: getVideos.data.errors
      })
    }
  } catch (error) {
    yield put({ type: Types.GET_VIDEOS_BY_KEY_WORD_FAILURE, error })
  }
}

export function* getVideosFromSearchSaga() {
  yield takeLatest(Types.GET_VIDEOS_BY_KEY_WORD_REQUEST, getVideosFromSearch)
}
