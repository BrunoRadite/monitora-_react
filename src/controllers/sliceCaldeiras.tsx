import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Caldeiras {
    id?: number;
    nome?: string;
    foto?: string;
    modelo?: string;
    temperatura_max_celsius?: number;
}

const initial_state: Caldeiras[] = []
var backup: Caldeiras[] = []

const sliceCaldeiras = createSlice({
    name: 'caldeiras',
    initialState: initial_state,
    reducers: {
        addCaldeira(state, { payload }: PayloadAction<Caldeiras>) {
            // add payload in backup
            backup = [...backup, payload];
            // add payload and return new state
            return [...state, payload];
        },
        clearCaldeiras(state) {
            // clear of backup
            backup = [];
            // clear and return new state
            return [];
        },
        filterCaldeiras(state, { payload }: PayloadAction<string>) {
            // filter by name or by model
            return state.filter((item) => (item.nome!.toUpperCase().includes(payload.toUpperCase().trim()) ||
                item.modelo!.toUpperCase().includes(payload.toUpperCase().trim())));
        },
        restoreToState(_) {
            return backup;
        }
    }
});

export default sliceCaldeiras.reducer;
export const { addCaldeira, clearCaldeiras, filterCaldeiras, restoreToState } = sliceCaldeiras.actions;
export const useCaldeiras = (state: any) => {
    return state.caldeiras as Caldeiras[];
}