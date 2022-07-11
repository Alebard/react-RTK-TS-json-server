import React from 'react';
import {IUser} from "../../types/IUser";

interface UserProps {
    user: IUser
}
const User: React.FC<UserProps> = ({user}) => {
    return (

        <tr>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
            <td>{user.website}</td>
        </tr>
    );
};

export default User;