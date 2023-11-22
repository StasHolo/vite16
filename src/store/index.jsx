import {combineReducers, createStore} from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { genreReducer } from './genreReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.min.css'

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
    genres: genreReducer,
})

export const store = createStore(rootReducer)
