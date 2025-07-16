import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Pages from "../../enums/Pages";

export type SelectedPageState = {
    page: Pages;
}
const initialState : SelectedPageState = {
    page: Pages.Home
}

const SelectedPageSlice = createSlice({
    name: 'selectedPageSlice',
    initialState,
    reducers : {
        setSelectedPage : (state, payload : PayloadAction<Pages>) => {
            state.page = payload.payload;
        }
    }
})

export default SelectedPageSlice.reducer;
export const {
    setSelectedPage
} = SelectedPageSlice.actions;