import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { fetchUser, addUser } from "../store";
import { useThunk } from "../hooks.js/useThunk";
import Button from './Button';
import Skeleton from "./Skeleton";
import UserListItem from "./UserListItem";

const UserList = () => {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUser);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    const { data } = useSelector((state) => {
        return state.users;
    });
    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const handleClick = () => {
        doCreateUser();
    };

    let content;
    if (isLoadingUsers) {
        content = <Skeleton times={6} className="h-10 w-full" />
    }
    else if (loadingUsersError) {
        content = <div>Error fetching data...</div>
    }
    else {
        <UserListItem user={data}/>
    }


    return (
        <div>
            <div className="flex flex-row justify-between items-center m-3">
                <h1 className="m-2 text-xl">Users</h1>
                <Button loading={isCreatingUser} onClick={handleClick}>+ ADD User</Button>
                {creatingUserError && 'error creating user'}
            </div>
            {content}
        </div>
    )
}

export default UserList;