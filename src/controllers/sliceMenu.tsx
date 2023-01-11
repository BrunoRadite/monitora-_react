import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initial_state_route: string = 'login';

const sliceMenu = createSlice({
    name: 'menu',
    initialState: initial_state_route,
    reducers: {
        setDisplayMenu(_, { payload }: PayloadAction<string>) {
            return payload;
        }
    }
});

export default sliceMenu.reducer;
export const { setDisplayMenu } = sliceMenu.actions;
export const useMenu = (state: any) => {
    return state.menu as string;
}