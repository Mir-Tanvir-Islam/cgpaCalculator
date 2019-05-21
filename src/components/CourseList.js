import React from 'react'
import { connect } from 'react-redux'
import CourseListItem from './CourseListItem'

const CourseList = (props) => (
	<div>
		<h6>Course List</h6>
		{props.courses.map((course) => (
			<CourseListItem key={course.courseId} {...course} />
		))}
	</div>
)

const mapStateToProps = (state) => {
	return {
		courses: state.courses,
		info: state.info
	}
}

export default connect(mapStateToProps)(CourseList)
