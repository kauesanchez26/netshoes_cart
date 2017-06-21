import { connect } from 'react-redux'

import Layout from '../components/Layout'
import * as actions from '../reducers/cart'

export default connect(null, actions)( Layout )
