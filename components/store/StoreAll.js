import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import UserReducer from './reducer/UserReducer';

const allStore = createStore(
    UserReducer
);

export default allStore;