import React from 'react';

import storeAll from './components/store/StoreAll';
import { Provider } from 'react-redux';
import Users from './components/User';

export default class Main extends React.Component {
  render() {
    return (
        <Provider store={storeAll}>
            <Users />
        </Provider>
    );
  }
}


