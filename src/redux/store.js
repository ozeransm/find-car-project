import { configureStore } from '@reduxjs/toolkit';
import reducerState from './redusers';

export default configureStore({
    reducer: {
      cars: reducerState
  }
})