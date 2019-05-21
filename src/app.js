import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addCourse, removeCourse, editCourse } from './actions/coursesActions'
import { setInfo, resetInfo } from './actions/infoActions'

const store = configureStore()

const unSubscribe = store.subscribe(() => {
	console.log(store.getState())
})

store.dispatch(
	addCourse({ courseId: 'PBH 101', semester: 172, grade: 'A', gpa: 4 })
)

store.dispatch(
	addCourse({ courseId: 'PHI 104', semester: 181, grade: 'A', gpa: 4 })
)

store.dispatch(editCourse('PBH 101', { semester: 191 }))

store.dispatch(
	setInfo({ userName: 'Rasal', id: '1922222', email: 'donkey@kingdom.com' })
)

// store.dispatch(removeCourse({ courseId: 'CSE 115' }))

// store.dispatch(resetInfo())

ReactDOM.render(<AppRouter />, document.getElementById('app'))
