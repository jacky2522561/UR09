import { useState,useCallback } from "react";
import {useDispatch} from 'react-redux';

const useThunk = (ThunkFunc) =>{
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const dispatch = useDispatch();

    const runThunk = useCallback((arg) =>{
        setLoading(true);
        dispatch(ThunkFunc(arg))
        .unwrap()
        .catch((err)=>setError(err))
        .finally(()=>setLoading(false))
    },[dispatch,ThunkFunc])

    return [runThunk,loading,error];
}

export {useThunk};