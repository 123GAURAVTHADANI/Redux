import {applyMiddleware, createStore} from 'redux';
import { themeToggle } from '../Reducer/reducer';
import { thunk } from 'redux-thunk'
const store = createStore(themeToggle, applyMiddleware(thunk))
export default store;