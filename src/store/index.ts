import {combineReducers, createStore} from "redux";
import { postReducer } from "./PostReducer";


export const rootReducer = combineReducers({
    post: postReducer
});



const store = createStore(rootReducer);

export default store;