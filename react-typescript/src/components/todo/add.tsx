import React, {ChangeEvent,KeyboardEvent} from 'react'

type State={
    text:string
}
type Props={
    onAddTodo(text:string):void
}
class App extends React.Component<Props,State>{
    state: State={
        text:''
    }
    onChange=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            text:e.target.value
        })
    }
    onKeyDown = (e:KeyboardEvent<HTMLInputElement>)=>{
        const {text} = this.state;
        if(text.trim()!=='' && e.code==='Enter'){
            this.props.onAddTodo(text);
            this.setState({
                text:''
            })
        }
    }
    render(){
        const {text} = this.state
        return <input
            value={text}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
        />
    }

}

export default App
