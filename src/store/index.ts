import { configureStore } from '@reduxjs/toolkit';
import proposalsReducer from './features/proposals/proposalsSlice';

export const store = configureStore({
  reducer: {
    proposals: proposalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 