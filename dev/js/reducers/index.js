import {combineReducers} from "redux";
import test from "./reducer-test";

const allReducers = combineReducers({ // that will be thrown to the Store
    test: test
});

export default allReducers;