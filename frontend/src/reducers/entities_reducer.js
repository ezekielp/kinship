import {combineReducers} from 'redux';
import friendsReducer from './friends_reducer';

const entitiesReducer = combineReducers({
    friends: friendsReducer
}) 

export default entitiesReducer;