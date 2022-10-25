import { createStoreHook} from 'react-redux';
import reducers from '../reducers/index'

const store = createStoreHook(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;