import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFormQuery } from '../../types/store';

const initialState: IFormQuery = {
  category: 'all',
  order: 'relevance',
  search: '',
};

export const bookSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setQueries: (state, action: PayloadAction<IFormQuery>) => {
      state.category = action.payload.category;
      state.order = action.payload.order;
      state.search = action.payload.search;
    },
  },
});

export default bookSlice.reducer;
