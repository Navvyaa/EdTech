import { configureStore } from '@reduxjs/toolkit';
import chapterReducer from '@/features/chapterSlice';

export const store = configureStore({
  reducer: {
    chapters: chapterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;