import { configureStore } from '@reduxjs/toolkit'
import colorModeSlice from "./slices/ColorModeSlice";
import selectedPageSlice from "./slices/SelectedPageSlice";
const store =configureStore({
    reducer: {
        ColorModeSlice: colorModeSlice,
        SelectedPageSlice: selectedPageSlice,
    },
})
export default store;
export type RootState = ReturnType<typeof store.getState>;