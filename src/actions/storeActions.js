export const getCGPA = (store) => {
	var cgpa = 0
	store.getState().courses.map((course) => {
		cgpa += course.gpa
	})
	return cgpa
}
