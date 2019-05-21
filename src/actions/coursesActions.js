//Add Course
export const addCourse = ({
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

//Remove Course
export const removeCourse = ({ courseId = '' } = {}) => ({
	type: 'REMOVE_COURSE',
	id: courseId
})

//Edit Course
export const editCourse = (id, updates) => ({
	type: 'EDIT_COURSE',
	id,
	updates
})

//Get CGPA
export const getCGPA = () => {
	var cgpa = 0
	store.getState().courses.map((course) => {
		cgpa += course.gpa
	})
	return cgpa
}
