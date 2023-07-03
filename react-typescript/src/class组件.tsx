import React, {FC} from 'react';
//----------类型
// type State={
//     count:number
// }
// type Props={
//     message?:string
// }
//
// class C1 extends React.Component {};//无props 无state
// class C2 extends React.Component<Props> {};//有props 无state
// class C3 extends React.Component<{},State> {};//无props 有state
// class C4 extends React.Component<Props,State> {};//有props 有state

//----------属性、属性默认值

// type Props={
//     name:string,
//     age?:number
// }
// class Hello extends React.Component<Props, any>{
//     // static defaultProps:Partial<Props> ={ //默认属性  Partial作用：构造一个类型，并将所有属性Type设置为可选
//     //     age:18
//     // }
//
//     render(){
//         const {name,age=20} = this.props; //或者直接简洁写法在解构时给定默认值
//         return <div>
//             我是{name},年龄{age}
//         </div>
//     }
//
// }


// ------state
type State={
    count:number
}

class Counter extends React.Component<{},State>{ //这里的类型是为了 设置修改状态时类型提示
    state:State={ //这里的类型是为了 写状态的时候有类型提示
        count:12
    }
    myClick=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        const {count} = this.state;
        return <div>
            {count}
            <button onClick={this.myClick}>加1</button>
        </div>
    }
}


function App(){
    return <Counter></Counter>
}
export default  App


