import { createStore, combineReducers } from 'redux'
import coursesReducer from '../reducers/coursesReducer'
import infoReducer from '../reducers/infoReducer'

export default () => {
	const store = createStore(
		combineReducers({
			courses: coursesReducer,
			info: infoReducer
		})
	)
	return store
}


