import { combineReducers } from "redux";
import personalDetails from './PersonalTask/reducer';

const rootReducer = combineReducers({
    personalDetails:personalDetails,
});

export default rootReducer;