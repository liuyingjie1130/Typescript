import React from 'react'
import {todoItem} from './todos'

type Props={
    list:todoItem[]
}
class App extends React.Component<Props>{
    render(){
        const {list} = this.props;
        return <div>{
            list.map((item)=>{
                return <div key={item.id}>
                    <input type={'checkbox'}/>
                    <span>{item.text}</span>
                    <button>取消完成</button>
                </div>
            })
        }</div>
    }

}

export default App
