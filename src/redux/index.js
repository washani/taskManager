import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { thunk } from "redux-thunk";

const persisteConfig = {
    key: "root",
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persisteConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    //middleware: composeEnhancers(applyMiddleware(thunk));
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        })
      },
});

export const useAppDispatch = () => useDispatch();
export const persistor = persistStore(store);
export default store;