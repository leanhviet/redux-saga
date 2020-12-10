// Libs
import { combineReducers } from 'redux'

// Reducers
import videoInfo from './videoInfoBox'
import relatedVideos from './relatedVideos'
import commentData from './comments'

export default combineReducers({
  videoInfo,
  relatedVideos,
  commentData
})
