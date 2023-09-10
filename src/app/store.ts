import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';


export const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunkMiddleware),
});


export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { loading: LoadingState, movies: MoviesState }
export type AppDispatch = typeof store.dispatch;