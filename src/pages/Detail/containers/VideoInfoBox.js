// Libs
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components
import VideoInfoBox from '../components/VideoInfoBox'

// Reducers
import { Creators } from '../redux/videoInfoBox'

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...Creators }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoInfoBox)
