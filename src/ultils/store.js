
import {  DarkmodeReducer, LoadingReducer, OpenMenuReducer, PointReducer   } from './reducer';
import {useMemo} from 'react';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  point:PointReducer,
  loading:LoadingReducer,
  darkmode:DarkmodeReducer,
  openmenu:OpenMenuReducer,
});

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export function configureStore(preloadedState) {
  return createStore(
    rootReducer, // root reducer with router state
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
let store;
 
export const initializeStore = (preloadedState) => {
  let _store = store ?? configureStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = configureStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }
 

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};
export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
