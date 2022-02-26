import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';  
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persisConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persisConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);