import React from 'react';
import User from "../User/User";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {AppDispatch} from "../../store/store";
import {fetchUsers} from "../../store/actionCreators";
import classes from "./usersList.module.css"

function onScrollList(event: any, dispatch: AppDispatch) {
    const scrollBottom =  event.target.scrollHeight - event.target.scrollTop -
        event.target.offsetHeight < 0.6;

    if (scrollBottom) {
        console.log('fetch')
        dispatch(fetchUsers())
    }
}

const UsersList = () => {
    const {users} = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()
    const usersList = users.map(item => <User key={item.id} user={item}/>)

    return (
        <div className={classes.wrapper}
             onScroll={event => onScrollList(event, dispatch)}
        >
            <table border={1}>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>City</td>
                    <td>Website</td>
                </tr>
                </thead>
                <tbody>
                {usersList}
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;