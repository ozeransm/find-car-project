import { combineReducers, createSlice } from '@reduxjs/toolkit'
import { fetchDatas } from './operation'
export const reducerState = createSlice({
  name: 'cars',
  initialState: {
    value: 0,
    isLoading: false,
    data: [],
    error: null,
    favorites: [],
      
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload)
    },
    delFavorite: (state, action) => {
      state.favorites = state.favorites.filter((el) => el !== action.payload);
    },
    delData: (state, action) => {
      state.data = [];
    }
  },
  extraReducers: builder => {
      builder
          .addCase(fetchDatas.pending, (state, action) => {
              state.isLoading = true;
        })
          .addCase(fetchDatas.fulfilled, (state, action) => {
              state.isLoading = false;
            // state.data = action.payload;
              state.data = [...state.data, ...action.payload];
              state.error = null;
        })
          .addCase(fetchDatas.rejected, (state, action) => {
              state.error = action.payload;
              state.isLoading = false;
        })
  }
})

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  addFavorite,
  delFavorite,
  delData
} = reducerState.actions
// export const reducer = combineReducers({cars: reducerState.reducer})
export default reducerState.reducer