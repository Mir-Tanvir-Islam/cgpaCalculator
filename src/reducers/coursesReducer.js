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
		case 'REMOVE_COURSE':
			return state.filter(({ id }) => id != action.id)
		case 'EDIT_COURSE':
			return state.map((course) => {
				if (course.id === action.id) {
					return {
						...course,
						...action.updates
					}
				} else {
					return course
				}
			})
		default:
			return state
	}
}

export default coursesReducer
