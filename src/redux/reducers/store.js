import { } from 'react-redux';
import reducers from '../reducers/index'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: reducers
})

// const store = createStoreHook(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;