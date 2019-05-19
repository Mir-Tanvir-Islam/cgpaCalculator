import { createStore, combineReducers } from 'redux'
import gradesReducer from '../reducers/gradesReducer'
import infoReducer from '../reducers/infoReducer'

export default () => {
	const store = createStore(
		combineReducers({
			grades: gradesReducer,
			info: infoReducer
		})
	)
	return store
}
