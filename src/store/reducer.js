import { combineReducers } from 'redux';
import { homeReducer } from '../Main/Pages/Home/services/reducer';
import { randomReducer } from '../Main/Pages/Random/services/reducer';
import { authReducer } from "../Main/Pages/Auth/services/reducer";
import { favoriteReducer } from '../Main/Pages/Favorite/services/reducer'
import { routerReducer } from "react-router-redux";


export default combineReducers({
    home: homeReducer,
    random: randomReducer,
    auth: authReducer,
    routing: routerReducer,
    favorite: favoriteReducer
})