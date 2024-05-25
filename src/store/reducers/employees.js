import { createSlice} from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
    name : 'employees',
    initialState : [],
    reducers : {
        _setEmployees : ( state , action ) => {
            return action.payload;
        },
        _addEmployee : ( state , action ) => {
            return [...state,action.payload];
        },
        _deleteEmployee : ( state , action ) => {
            return state.filter((p) => p.id !== action.payload)
        },
        _updateEmployee : ( state , action ) => {
            return state.map(employee => {
                if (parseInt(employee.id) === parseInt(action.payload.id)) {
                    return action.payload;
                }
                return employee;
            });
        }

    }
})


export const { 
    _setEmployees , 
    _addEmployee , 
    _deleteEmployee ,
    _updateEmployee
} = employeesSlice.actions;

export default employeesSlice.reducer;