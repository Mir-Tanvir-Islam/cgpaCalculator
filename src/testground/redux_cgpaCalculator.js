import { createStore, combineReducers } from 'redux'

const gradesReducerDefaultState = []

const gradesReducer = (state = gradesReducerDefaultState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

const infoReducerDefaultState = {
	userName: 'Mir Tanvir Islam',
	id: '1711730042',
	email: 'tanvir98.mt@gmail.com'
}

const infoReducer = (state = infoReducerDefaultState, action) => {
	switch (action.type) {
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
