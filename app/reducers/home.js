import { CHANGE_TEST } from '../actions/home'
//定义最初的state
let init={
    test:''
};
export default function user(state=init,action){
    switch(action.type){
        case CHANGE_TEST:
            return Object.assign({},state,{test:action.test});
        default :
            return state;
    }
}