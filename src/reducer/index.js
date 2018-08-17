import { combineReducers } from 'redux';
import { gifs, isGifsFetching } from "./gif";

export default combineReducers({
	gifs,
	isGifsFetching
})