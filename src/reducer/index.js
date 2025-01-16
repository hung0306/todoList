import toDoReducer from "../reducer/todo"
import {combineReducers} from "redux";

const allReducers = combineReducers({
    toDoReducer,
})
export default allReducers