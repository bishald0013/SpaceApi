import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { spaceXApi } from "../services/spacex"


export const store = configureStore({
    reducer: {
        [ spaceXApi.reducerPath ]: spaceXApi.reducer,
    },
    
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(spaceXApi.middleware)

})

setupListeners(store.dispatch)