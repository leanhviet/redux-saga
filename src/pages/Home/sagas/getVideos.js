// Libs
import { takeLatest, put } from 'redux-saga/effects'

// Constants
import {
  VIDEOS_URL,
  SEARCH_URL,
  CHART,
  PART,
  MAX_RESULTS,
  TYPE
} from '../../../constants/api'

// Types action
import { Types } from '../redux/videos'

// Handle API
import { getAPI } from '../../../api/youtube'

// worker saga for fetch data from home
export function* getVideos() {
  try {
    // params
    const params = {}
    params.key = process.env.REACT_APP_API_KEY
    params.chart = CHART
    params.part = PART
    params.regionCode = 'VN'
    params.maxResults = MAX_RESULTS

    // get list videos by params
    const getVideos = yield getAPI(VIDEOS_URL, params)

    if (getVideos.status === 200) {
      yield put({
        type: Types.GET_VIDEOS_SUCCESS,
        videos: getVideos.data.items
      })
    } else {
      yield put({
        type: Types.GET_VIDEOS_FAILURE,
        error: getVideos.data.errors
      })
    }
  } catch (error) {
    yield put({ type: Types.GET_VIDEOS_FAILURE, error })
  }
}

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
function* getVideosFromSearch(data = {}) {
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

export function* getVideosSaga() {
  yield takeLatest(Types.GET_VIDEOS_REQUEST, getVideos)
}

export function* getVideosFromSearchSaga() {
  yield takeLatest(Types.GET_VIDEOS_BY_KEY_WORD_REQUEST, getVideosFromSearch)
}
