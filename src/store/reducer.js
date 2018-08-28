import { combineReducers } from 'redux';
import { homeReducer } from '../Main/Pages/Home/services/reducer';
import { randomReducer } from '../Main/Pages/Random/services/reducer';
import { authReducer } from "../Main/Pages/Auth/services/reducer";


export default combineReducers({
    home: homeReducer,
    random: randomReducer,
    auth: authReducer,
})