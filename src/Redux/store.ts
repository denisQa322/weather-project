import { createStore } from 'redux';
import rootReducer from './reducers'; // Подключите ваши редукторы здесь

const store = createStore(rootReducer);

export default store;