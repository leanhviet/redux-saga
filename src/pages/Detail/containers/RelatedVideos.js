// Libs
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components
import RelatedVideos from '../components/RelatedVideos'

// Reducers
import { Creators } from '../redux/relatedVideos'

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...Creators }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedVideos)
