import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer, { fetchMissionsFromApi } from './missions/missions';
import { rocketReducer } from './rockets/rockets';

const reducer = combineReducers({
  missionsReducer, rocketReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
store.dispatch(fetchMissionsFromApi());
export default store;
