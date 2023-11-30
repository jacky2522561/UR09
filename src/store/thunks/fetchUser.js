import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUser = createAsyncThunk('user/fetch',async() =>{
    const response = await axios.get('http://localhost:3001/users');
    return response.data
})

export {fetchUser};  