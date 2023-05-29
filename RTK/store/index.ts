import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import rootReducer, { RootState } from './reducers';

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        if (__DEV__) {
            const createDebugger = require('redux-flipper').default;
            return getDefaultMiddleware().concat(createDebugger());
        }
        return getDefaultMiddleware();
    },
});
export default store;

// 타입스크립트에서 쓰기 위한 wrapper
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
