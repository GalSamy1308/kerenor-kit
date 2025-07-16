import {createSlice} from "@reduxjs/toolkit";
import {ColorMode} from "../../enums/ColorMode";

export type ColorModeState = {
    mode: ColorMode;
}
const initialState : ColorModeState = {
    mode: ColorMode.Light
}

const ColorModeSlice = createSlice({
    name: 'colorModeSlice',
    initialState,
    reducers : {
        toggleColorMode : (state) => {
            state.mode = state.mode === ColorMode.Light ? ColorMode.Dark : ColorMode.Light;
        }
    }
})

export default ColorModeSlice.reducer;
export const {
    toggleColorMode
} = ColorModeSlice.actions;