import {createStore} from 'redux';
import viewReducer from './reducers';

const store = createStore(viewReducer);

export default store;