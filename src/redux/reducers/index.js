import province from './province'
import district from './district'
import authenticate from './authenticate'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({ province, district, authenticate })

export default rootReducers