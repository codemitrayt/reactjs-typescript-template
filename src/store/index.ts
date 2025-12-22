import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import {
  type Action,
  type ThunkAction,
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';

import { appEnv, NODE_ENV } from '@/constants';
import authSlice from '@/store/slices/auth-slice.ts';

const rootReducer = combineReducers({
  auth: authSlice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/FLUSH',
          'persist/PURGE',
          'persist/REGISTER',
        ],
      },
    }),
  devTools: appEnv.NODE_ENV === NODE_ENV.DEVELOPMENT,
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export { type AppDispatch, type RootState, type AppThunk };

export const persistor = persistStore(store);
export default store;

export { setAuth, logout, setUser } from './slices/auth-slice';
