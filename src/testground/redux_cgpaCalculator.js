import { createStore, combineReducers } from 'redux'

//Add Grade
//Remove Grade
//Edit Grade

const gradesReducerDefaultState = []

const gradesReducer = (state = gradesReducerDefaultState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

//Set Info
//Reset Info

const infoReducerDefaultState = {
	userName: 'Mir Tanvir Islam',
	id: '1711730042',
	email: 'tanvir98.mt@gmail.com'
}

const infoReducer = (state = infoReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_INFO':
			return { ...state, ...action.updates }
		default:
			return state
	}
}

const store = createStore(
	combineReducers({
		grades: gradesReducer,
		info: infoReducer
	})
)

console.log(store.getState())

store.dispatch({ type: 'SET_INFO', updates: { userName: 'Muez' } })
console.log(store.getState())
