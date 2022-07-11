import {IUser} from "../../types/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "../actionCreators";

interface Users {
    users: IUser[];
    isLoading: boolean;
    error: string;
    requestCompleted: boolean;
}

const initialState : Users = {
    users: [],
    isLoading: false,
    error: '',
    requestCompleted: false,
}

export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
            state.requestCompleted = true
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<Error>) => {
            state.isLoading = false;
            state.error = action.payload.message;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        }
    }
})