import { combineReducers } from 'redux';
import { gifs, isGifsFetching } from "./gif";
import { random, isRandomGifsFetching } from "./random";


export default combineReducers({
	gifs,
	isGifsFetching,
	random,
    isRandomGifsFetching
})