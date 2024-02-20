import { createSlice } from "@reduxjs/toolkit";

// Get user from localStorage
let localUser = JSON.parse(localStorage.getItem('user'));

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR : 'error',
    LOADING : 'loading',
    SUCCESS : 'success'
});

const authSlice = createSlice({

    name : 'auth',

    initialState : {
        user : localUser ? localUser : null,
        status : STATUSES.IDLE,
        message : ''
    },

    reducers : {
        setUser(state,action){
            state.user = action.payload;
        },
        setUserStatus(state,action){
            state.status = action.payload;
        },
        setMessage(state,action){
            state.message = action.payload;
        },
        ResetUser(state,action){
            state.user = action.payload;
            state.message = '';
        },
    }
});

export const { setUser , setUserStatus , setMessage, ResetUser} = authSlice.actions;
export default authSlice.reducer;