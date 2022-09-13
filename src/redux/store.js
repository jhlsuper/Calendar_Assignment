import {createStore, combineReducers} from 'redux';
import monthReducer from './reducers/monthReducer';

const rootReducer = combineReducers({
  date: monthReducer,
});

export const store = createStore(rootReducer);

// const monthSubscriber = () => {
//   const latestState = store.getState();
//   console.log('latestState', latestState);
// };
// store.subscribe(monthSubscriber);
