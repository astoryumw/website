import * as actionTypes from '../actions/actionType';
import Home from '../../pages/index.js';

const initialState = {
	number: 0,
}; // initial state

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.NEW_NUMBER:
			return {
				number: this.state.milliSecondsElapsed/100,
			};

		case actionTypes.OLD_NUMBER:
			return {
				number: 0,
			};

		default: return state;
	}
};

export default reducer;
