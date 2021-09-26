import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import checker from './checker'
import logger from './logger'

const middleware = applyMiddleware(thunk, checker, logger)

export default middleware
