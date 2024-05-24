import { createSlice} from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
    name : 'employees',
    initialState : [],
    reducers : {
        _setEmployees : ( state , action ) => {
            return action.payload;
        },
        _addEmployee : ( state , action ) => {
            return state.push(action.payload);
        },
        _deleteEmployee : ( state , action ) => {
            return state.filter((p) => p.id !== action.payload)
        }
    }
})


export const { 
    _setEmployees , 
    _addEmployee , 
    _deleteEmployee 
} = employeesSlice.actions;

export default employeesSlice.reducer;