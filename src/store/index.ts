import { configureStore } from '@reduxjs/toolkit'
import colorModeSlice from "./slices/ColorModeSlice";
const store =configureStore({
    reducer: {
        ColorModeSlice: colorModeSlice,
    },
})
export default store;
export type RootState = ReturnType<typeof store.getState>;