import { combineReducers } from 'redux';
import app from './app';
import user from './user';
import calculator from './calculator';
import productlist from './productlist';

export default combineReducers({
    app,
    user,
    calculator,
    productlist,
});
