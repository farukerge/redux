import { configureStore } from '@reduxjs/toolkit';
import noteReducer from '../features/Note/noteReducer';

export const store = configureStore({
  reducer: {
    note: noteReducer,
  },
});
