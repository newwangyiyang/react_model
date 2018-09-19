//action的构造函数,返回action对象

import * as Model from './action-type';


export const add = num => { //该方法只传递一个参数: number
    return {
        type: Model.MODEL_ADD,
        num
    }
};

export const init = num => { //初始化方法, 参数num
    return {
        type: Model.MODEL_INIT,
        num
    }
}

