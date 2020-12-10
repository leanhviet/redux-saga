// Libs
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components
import CommentList from '../components/CommentList'

// Reducers
import { Creators } from '../redux/comments'

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...Creators }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList)
