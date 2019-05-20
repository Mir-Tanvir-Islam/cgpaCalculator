import { createStore, combineReducers } from 'redux'

//Add Course
const addCourse = ({
	courseId = '',
	semester = '',
	grade = '',
	gpa = ''
} = {}) => ({
	type: 'ADD_COURSE',
	course: {
		id: courseId,
		courseId,
		semester,
		grade,
		gpa
	}
})

//Edit Course

//

const coursesReducerDefaultState = [
	{
		//grade, gpa, course id, semester no
		id: 'CSE 115',
		courseId: 'CSE 115',
		semester: 171,
		grade: 'A',
		gpa: 4
	}
]

const coursesReducer = (state = coursesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_COURSE':
			return [...state, action.course]

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
		case 'RESET_INFO':
			return { userName: '', id: '', email: '' }
		default:
			return state
	}
}

const store = createStore(
	combineReducers({
		courses: coursesReducer,
		info: infoReducer
	})
)

const unSubscribe = store.subscribe(() => {
	console.log(store.getState())
})

store.dispatch({ type: 'RESET_INFO', updates: { userName: 'Muez' } })

store.dispatch(
	addCourse({ courseId: 'PBH 101', semester: 172, grade: 'A', gpa: 4 })
)
