import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./reducers/employees";

export default configureStore({
    reducer : {
        employees : employeesReducer
    }
})