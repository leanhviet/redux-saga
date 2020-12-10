// Libs
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components
import Cards from '../components/Cards'

// Reducers
import { Creators } from '../redux/cards'

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...Creators }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)
