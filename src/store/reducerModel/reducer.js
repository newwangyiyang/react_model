//定义reducer处理函数，接收action,更改store状态
import * as Model from './action-type';


//默认num的初始状态
const defaultState = {
    num: 0
}
/*
    注意三点
        1、reducer中每一个判断，都需要return 新的 {..state.}

        2、reducer中的判断不要忘了加上 default，用于初始化store

        3、reducer中传递的state和view层中connect方法中传递的state是不一样的

            connect方法中对state又进行了一层包装
*/

//reducer函数接收两个参数(state和action)
export const reducerModel = (state=defaultState, action) => {
    switch (action.type) {
        case Model.MODEL_ADD: 
            //定义加的处理
            state.num += action.num;
            //返回新的state
            return {...state};  //该方法会复制一个新的对象就行返回，不会对旧的state造成影响
        case Model.MODEL_INIT: 
            state.num = action.num; //对state进行init操作
            return {...state};
        default: 
            return {...state}; //对store进行初始化操作
    }
}