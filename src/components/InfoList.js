import React from 'react'
import { connect } from 'react-redux'

const InfoList = ({ info }) => (
	<p>
		<small>User Info</small>
		<br />
		<i>{info.userName}</i> :<i>{info.id}</i> :<i>{info.email}</i>
	</p>
)

const mapStateToProps = (state) => {
	return {
		courses: state.courses,
		info: state.info
	}
}

export default connect(mapStateToProps)(InfoList)
