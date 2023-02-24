import { applyMiddleware } from "redux";
import Reducer from "./Reducer";
import thunk from "redux-thunk"
import { legacy_createStore as createStore} from 'redux'



export const store = createStore(Reducer,{},applyMiddleware(thunk))