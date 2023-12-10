import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { catFactApi } from "../services/CatFacts"
import { setupListeners } from "@reduxjs/toolkit/query"
import { catImgApi } from "../services/CatImgs"
// Need to use the React-specific entry point to import createApi

export const store = configureStore({
  reducer: {
    [catFactApi.reducerPath]: catFactApi.reducer,
    [catImgApi.reducerPath]: catImgApi.reducer
  },
   // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([catFactApi.middleware, catImgApi.middleware]),

})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
