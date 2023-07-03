import React from 'react'
import Add from './add';
import List from './list';
import Footer from './footer';
import {todoItem} from "./todos";


type Todos={
    todos:todoItem[]
}
const todos:todoItem[] = [
    {id:1,text:'吃饭',done:false},
    {id:2,text:'休息',done:false}
]
class App extends React.Component<{},Todos>{
    state:Todos={
        todos
    }
    addTodo = (text:string)=>{
        const {todos} = this.state;
        const id = todos.length ? todos[todos.length-1].id: 1
        this.setState({
            todos:[
                ...todos,
                {
                    id,
                    text,
                    done:false
                }
            ]
        })
    }
    render(){
        const {todos} = this.state;
        return <div>
            <Add onAddTodo={this.addTodo}></Add>
            <List list={todos}></List>
            <Footer></Footer>
        </div>
    }

}

export default App
