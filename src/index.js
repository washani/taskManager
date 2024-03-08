import React, { useEffect } from "react";
import Navigator from './navigation';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux";


const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Navigator />
        </PersistGate>
    </Provider>
)

export default App;