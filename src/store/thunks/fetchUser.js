import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUser = createAsyncThunk('user/fetch',async() =>{
    const response = await axios.get('http://localhost:3001/users');
    //Dev only
    // await pause(2000);
    return response.data;
})

export {fetchUser};  

//Dev only
// const pause = (time) =>{
//     return new Promise((resolve)=>{
//         setTimeout(resolve,time)
//     })
// };


