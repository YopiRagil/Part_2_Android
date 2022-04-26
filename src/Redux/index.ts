import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import MainReducer from './Reducer/Main.Reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['thunk'],
};

const rootReducer = combineReducers({
  main: persistReducer(persistConfig, MainReducer),
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

store.subscribe(() => {
  // console.log('==STORE==', store.getState());
});

export default store;
