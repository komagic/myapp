//这里引入添加的reducer文件
import { combineReducers} from 'redux';

import home from './home';

var rootReducer=combineReducers({
   home,
});

export default rootReducer;