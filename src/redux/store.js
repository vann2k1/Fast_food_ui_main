import { configureStore } from '@reduxjs/toolkit';

// client
import loginReducer from './loginSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
