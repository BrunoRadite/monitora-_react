import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initial_state: boolean = false;

const sliceActiveMenu = createSlice({
    name: 'activeMenu',
    initialState: initial_state,
    reducers: {
        setActiveMenu(_, { payload }: PayloadAction<boolean>) {
            return payload;
        }
    }
});


export default sliceActiveMenu.reducer;
export const { setActiveMenu } = sliceActiveMenu.actions;
export const useActiveMenu = (state: any) => {
    return state.activeMenu as boolean;
}