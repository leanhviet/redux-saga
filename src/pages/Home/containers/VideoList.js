// Libs
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components
import VideoList from '../components/VideoList'

// Reducers
import { Creators } from '../redux/videos'

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...Creators }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList)
