import {createSlice} from '@reduxjs/toolkit';
import { fetchUser } from '../thunks/fetchUser';
const usersSlice = createSlice({
    name:'users',
    initialState:{
        data:[],
        isLoading:false,
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUser.pending);
        builder.addCase(fetchUser.fulfilled);
        builder.addCase(fetchUser.rejected);
    }
});

export const usersReducer = usersSlice.reducer;