import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducers'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'
import thunk from 'redux-thunk'

const enchancer = applyMiddleware(thunk,logger,randomId,api)
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),enchancer)

//dev only
window.store = store

export default store