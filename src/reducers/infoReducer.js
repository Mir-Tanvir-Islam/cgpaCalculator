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

export default infoReducer
