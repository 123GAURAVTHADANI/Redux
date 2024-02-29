import {createStore} from 'redux';
import { themeToggle } from '../Reducer/reducer';

const store = createStore(themeToggle);
export default store;