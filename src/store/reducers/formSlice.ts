import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IDataQueriesState } from '../../types/store';
import { IFormQuery } from '../../types/components';

const initialState: IDataQueriesState = {
  indexForLoads: 0,
  category: 'all',
  order: 'relevance',
  search: '',
};

export const bookSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setFormQueries: (state, action: PayloadAction<IFormQuery>) => {
      state.category = action.payload.category;
      state.order = action.payload.order;
      state.search = action.payload.search;
      state.indexForLoads = 0;
    },
    setStartIndex: (state, action: PayloadAction<number>) => {
      state.indexForLoads += action.payload;
    },
  },
});

export default bookSlice.reducer;
