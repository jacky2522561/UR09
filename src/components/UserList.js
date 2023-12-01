import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { fetchUser } from "../store";
import Skeleton from "./Skeleton";
const UserList = () =>{
    const {data,isLoading,error} = useSelector((state)=>{
        return state.users;
    });
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUser());
    },[dispatch]);
    if(isLoading){
        return <Skeleton time={6} className='h-10 w-full'/>
    }
    if(error){
        return <div>Error!!!!!1</div>
    }
    
    return(
        <div>
            {data.length}
        </div>
    )
}

export default UserList;