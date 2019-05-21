//Get CGPA
const getCGPA = () => {
	var cgpa = 0
	store.getState().courses.map((course) => {
		cgpa += course.gpa
	})
	return cgpa
}
