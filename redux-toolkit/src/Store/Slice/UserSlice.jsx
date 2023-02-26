import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers:{
        addUser(State, action) {
            State.push(action.payload);
        },
        removeUser(state,action) {
            state.splice(action.payload,1)
        },
        deleteUsers(state,action) {},
    },

});

export default userSlice.reducer;
export const {addUser, removeUser} = userSlice.actions