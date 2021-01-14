import * as actionTypes from './actionTypes';

export const oldNumber = () => ({type: actionTypes.oldNumber });
export const newNumber = () => ({type: actionTypes.newNumber });

export const newNumberAsync = () => (dispatch) => {
	setTimeout(() => {
		dispatch(newNumber);
	}, 2000);
};


