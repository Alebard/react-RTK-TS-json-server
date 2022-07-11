import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "../types/IUser";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetch',
    async(_,  thunkApi) => {

        const _limit = limit()
        try{
            const response = await axios.get<IUser[]>('http://localhost:3001/users?_sort=id&_order=desc&_limit='+_limit)
            return response.data
        }catch (e: any) {
            return thunkApi.rejectWithValue(e)
        }
    }
)

function getLimit() {
    let count = 0
    return function () {
        return  count+=4
    }
}

const limit = getLimit()