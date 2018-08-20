import { combineReducers } from 'redux';
import * as homeReducer from '../Main/Pages/Home/services/reducer';
import * as randomReducer from '../Main/Pages/Random/services/reducer';


export default combineReducers({
	homeReducer,
	randomReducer
})