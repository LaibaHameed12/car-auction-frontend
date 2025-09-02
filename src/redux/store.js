import { configureStore } from "@reduxjs/toolkit"
import { authApi } from "./slices/auth/authApi";
import { auctionApi } from "./slices/auctions/auctionApi";
import authReducer from "./slices/auth/authSlice";
import auctionReducer from "./slices/auctions/auctionSlice";
import { carApi } from "./slices/cars/carApi";
import { usersApi } from "./slices/users/usersApi";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        auction: auctionReducer,
        [carApi.reducerPath]: carApi.reducer,
        [authApi.reducerPath]:authApi.reducer,
        [auctionApi.reducerPath]: auctionApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, auctionApi.middleware, carApi.middleware, usersApi.middleware)
})

export default store