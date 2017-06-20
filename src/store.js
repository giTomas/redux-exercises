import { createStore, combineReducers } from 'redux';
//redux basic

const initialUserState = {
	users: [],
};

const userReducer = (state=initialUserState, action) => {
	switch(action.type) {
		case 'USER_LIST_SUCCES':
			return {...state, users: action.users};
		default:
			return state;
	}
};
const widgetReducer = (state=initialUserState, action) => {
	switch(action.type) {
		case 'WIDGET_LIST_SUCCES':
			return {...state, users: action.widgets};
		default:
			return state;
	}
};
const reducers = combineReducers({
  userState: userReducer,
  widgetState: widgetReducer,
});

const store = createStore(reducers);

export default store;
