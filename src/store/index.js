import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducers'
import logger from '../middlewares/logger'


const enchancer = applyMiddleware(logger)
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),enchancer)

//dev only
window.store = store

export default store