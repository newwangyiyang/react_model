import * as IndexPage from './action-type';
import $http from '../../axios/http';

//在store中进行异步请求，采用applyMiddleare中间件thunk,

//注意:   异步操作中action返回的是一个函数
export const ajaxStore = () => {
    return async dispatch => {
        const {data} = await $http.get('https://api.myjson.com/bins/1bl7kc');
        dispatch({
            type: IndexPage.AJAX_STORE,
            data
        });
    }
}