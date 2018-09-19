import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
//初始化样式
// import './assets/css/reset.css';

//引入Provider组件,作用: 向所有组件提供store数据源
import { Provider } from 'react-redux';

//引用redux
import store from './store/store';

//引入路由
import Route from './route/index';


ReactDOM.render(
    //传递props----store,向所有组件提供store数据源
    <Provider store={store}> 
        <Route />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
