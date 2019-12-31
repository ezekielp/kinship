import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';

const _nullErrors = [];

const sessionErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
        case CLEAR_ERRORS:
            return _nullErrors;
        default:
            return state;
    }
};

export default sessionErrorsReducer;