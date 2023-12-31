import {configureStore} from '@reduxjs/toolkit';
import {usersReducer} from './slices/usersSlice';

const store = configureStore({
    reducer:{
        users:usersReducer
    }
});

export {store};

export * from './thunks/fetchUser';
export * from './thunks/addUser';
export * from './thunks/removeUser';