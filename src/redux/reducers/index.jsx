import { combineReducers } from 'redux';
import postal from './postal.reducer';
import name from './name.reducer';
import selected from './selected.reducer';

export default combineReducers({
    postal,
    name,
    selected,
});
