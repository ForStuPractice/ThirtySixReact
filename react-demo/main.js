//React 依赖 语法糖 React.createELment("div",{},"哔哩不拉不拉") JSX 
import React,{ Component } from "react"
import ReactDom from "react-dom"

class App extends Component{

    //主要是一个render 方法
    render(){
        return (
            <div> 哔哩不拉不拉</div>
        )
    }
}
//接受两个参数
ReactDom.render(<App></App>,document.getElementById("root"))



