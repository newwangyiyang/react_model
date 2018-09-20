import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

//rc-form受控
import { createForm } from 'rc-form';
 //接收两个参数 state函数, action函数
//connect方法的作用: 用来连接UI视图层和数据源store，完成数据交互

//获取action构造函数，目的：通过action可直接对store数据源数据进行修改
import { add, init } from '../../store/reducerModel/action';
//引入antd-mobile  UI库
import { Button, List, InputItem } from 'antd-mobile';


import styles from './ModelPage.css';
class ModelPage extends Component {
    render() {
        //受控组件的基本使用
        const { getFieldProps } = this.props.form;
        return (
            <div styleName='ModelPage'>

                <List renderHeader={() => 'Customize to focus'}>
                    <InputItem
                    {...getFieldProps('autofocus', {
                        // onBlur(e) {
                        //     console.log(e);
                        // }
                        // rules: [{required: true}]
                    })}
                    clear
                    placeholder="auto focus"
                    onBlur={() => {
                        console.log(this.props.form.getFieldsValue().autofocus);
                    }}
                    ref={el => this.autoFocusInst = el}
                    >标题</InputItem>
                    <InputItem
                    {...getFieldProps('focus')}
                    clear
                    placeholder="click the button below to focus"
                    ref={el => this.inputRef = el}
                    >标题</InputItem>
                </List>

                <h1 onClick={() => this.handlerAdd()}>{this.props.num}</h1>
                <Button onClick={() => this.props.init(10)} type="ghost" size='small' inline>primary</Button>
            </div>
        )
    }
    handlerAdd() {
        this.props.add(10);
    }
    componentDidUpdate() {
        //通过受控组件来获取值
        // console.log(this.props.form.getFieldsValue().autofocus);
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
)(createForm()(CSSModules(ModelPage, styles)));




