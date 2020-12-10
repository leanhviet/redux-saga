// Libs
import { all } from 'redux-saga/effects'

import { getVideosSaga } from '../pages/Home/sagas/getVideos'
import { getVideoInfoSaga } from '../pages/Detail/sagas/getVideoInfoBox'
import { getRelatedVideosSaga } from '../pages/Detail/sagas/getRelatedVideos'
import { getCommentsSaga } from '../pages/Detail/sagas/getComments'
import { getVideosFromSearchSaga } from '../pages/Search/sagas/getVideosBySearch'
import { postCommentSaga } from '../pages/Detail/sagas/postComment'

function* rootSaga() {
  yield all([
    getVideosSaga(),
    getVideoInfoSaga(),
    getRelatedVideosSaga(),
    getCommentsSaga(),
    getVideosFromSearchSaga(),
    postCommentSaga()
  ])
}

export default rootSaga
