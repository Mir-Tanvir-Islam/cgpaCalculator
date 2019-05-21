import React from 'react'
import { connect } from 'react-redux'

const CourseListItem = ({ courseId, semester, grade, gpa }) => (
	<div>
		<p>
			{courseId} : {semester} : {grade} : {gpa}
		</p>
	</div>
)

export default connect()(CourseListItem)
