import React, {FC} from 'react';


type props={
    name:string,
    age?:number
}
//FC函数组件类型 是个泛型，props指定类型

// const Hello:FC<props> = ({name,age})=> {
//     return <div>
//         我是{name},年龄{age}
//     </div>
// }
// Hello.defaultProps={ //设置属性默认值
//     age:18,
// }

// 也可以直接简化为（完全按照函数在ts中的写法，不使用FC）

const Hello= ({name,age=18}:props)=>{
    const myClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
        console.log('click',e)
    }
    const myChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
    }
    return <div>
        我是{name},年龄{age}
        <button onClick={myClick}>btn</button>
        <input onChange={myChange }/>
    </div>
}

function App(){
    return <Hello name={'lyj'}></Hello>
}
export default  App


