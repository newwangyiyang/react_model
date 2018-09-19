import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
 //接收两个参数 state函数, action函数
//connect方法的作用: 用来连接UI视图层和数据源store，完成数据交互

//获取action构造函数，目的：通过action可直接对store数据源数据进行修改
import { add, init } from '../../store/reducerModel/action';


import styles from './ModelPage.css';
class ModelPage extends Component {
    render() {
        return (
            <div styleName='ModelPage'>
                <h1 onClick={() => this.handlerAdd()}>{this.props.num}</h1>
                <button onClick={() => this.props.init(10)}>init</button>
            </div>
        )
    }
    handlerAdd() {
        this.props.add(10);
    }
    componentWillMount() {
        
    }
}


export default connect( //该方法会直接返回一个组件
    state => {
        return {
            //获取在store中存储的num数据， view层通过this.props.num可直接对该数据进行访问
            //connect方法中传递的state对原数据按照  --reducer划分-- 进行了包装
            num: state.reducerModel.num
        }
    },
    {       //接收action， this.props.action()对数据源进行操作
        add,
        init
    }
)(CSSModules(ModelPage, styles));
