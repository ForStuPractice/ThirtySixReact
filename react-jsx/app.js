//React 依赖 语法糖 React.createELment("div",{},"哔哩不拉不拉") JSX 
import React,{ Component } from "react"
import ReactDom from "react-dom"

/* 
    1. 定义12个星座
    2. 遍历这个数组 jsx渲染
    3. jsx语法 加括号 变成语法块
*/
class App extends Component{

    //主要是一个render 方法
    render(){
        const constellations = ["♈ 白羊座","♉金牛座","双子座♊","♋巨蟹座","狮子座♌","处女座♍","♎天秤座","射手座♐","♑魔羯座","水瓶座♒","双鱼座♓"];
        
        return (
            <div> 
                {
                    constellations.map((v,i) => <p key={i}> {v} </p>)
                }
            </div>
        )
    }
}
//接受两个参数
ReactDom.render(<App></App>,document.getElementById("root"))



