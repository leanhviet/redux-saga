// Libs
import { combineReducers } from 'redux'

// Reducers
import mainData from '../pages/Home/redux/videos'
import detailData from '../pages/Detail/redux'
import searchData from '../pages/Search/redux/cards'

export default combineReducers({
  mainData,
  detailData,
  searchData
})
