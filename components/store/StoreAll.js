//import thunk from 'redux-thunk';
import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import UserReducer from './reducer/UserReducer';

const allStore = combineReducers({
    UserReducer   
});

const store = createStore(
    allStore,
    applyMiddleware(thunk)
);
export default store;