import { configureStore } from '@reduxjs/toolkit';
import sliceActiveMenu from './sliceActiveMenu';
import sliceCaldeiras from './sliceCaldeiras';
import sliceMenu from './sliceMenu';


export const store = configureStore({
    reducer: {
        caldeiras: sliceCaldeiras,
        menu: sliceMenu,
        activeMenu: sliceActiveMenu,
    }
});
