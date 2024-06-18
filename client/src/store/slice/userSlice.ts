import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IAlbum} from "@/types/ialbum";

interface UserState {
    favouriteArray: Array<IAlbum>;
}

const initialState: UserState = {
    favouriteArray: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addFavourite: (state, action: PayloadAction<IAlbum>) => {
            const existingItem = state.favouriteArray.find(item => item.albumId === action.payload.albumId);
            if (!existingItem) {
                state.favouriteArray.push(action.payload);
            } else {
                state.favouriteArray = state.favouriteArray.filter(item => item.albumId !== action.payload.albumId);
            }
        },

    },
});

export const { addFavourite } = userSlice.actions;

export const selectUser = (state: { user: UserState }) => state.user;

export default userSlice.reducer;
