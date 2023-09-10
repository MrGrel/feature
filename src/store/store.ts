import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { booksApi } from './reducers/booksApi';
import formSlice from './reducers/formSlice';

const rootReducer = combineReducers({
  formReducer: formSlice,
  [booksApi.reducerPath]: booksApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware),
  });
};

export type rootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
