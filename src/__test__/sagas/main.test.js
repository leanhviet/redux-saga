// Libs
import { cloneableGenerator } from '@redux-saga/testing-utils'
import { all } from 'redux-saga/effects'

import { getVideosSaga } from '../../pages/Home/sagas/getVideos'
import { getVideoInfoSaga } from '../../pages/Detail/sagas/getVideoInfoBox'
import { getRelatedVideosSaga } from '../../pages/Detail/sagas/getRelatedVideos'
import { getCommentsSaga } from '../../pages/Detail/sagas/getComments'
import { getVideosFromSearchSaga } from '../../pages/Search/sagas/getVideosBySearch'
import { postCommentSaga } from '../../pages/Detail/sagas/postComment'
import rootSaga from '../../sagas'

describe('Test rootSaga', () => {
  const gen = cloneableGenerator(rootSaga)()

  it('should yield all', () => {
    expect(gen.next().value).toEqual(
      all([
        getVideosSaga(),
        getVideoInfoSaga(),
        getRelatedVideosSaga(),
        getCommentsSaga(),
        getVideosFromSearchSaga(),
        postCommentSaga()
      ])
    )
  })
})
