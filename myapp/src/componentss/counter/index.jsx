import {Component} from "react";
import "./index.css"
// class Counter extends Component{
//     state={
//         counter:0
//     }
//     onIncreseBtn=()=>{
//         this.setState({
//             counter:this.state.counter+1
//         })
//     }
//     onDecrementBtn=()=>{
//         this.setState({
//             counter:this.state.counter-1
//         })
//     }
//     onResetBtn=()=>{
//         this.setState({
//             counter:0
//         })
//     }
//     render(){
//         return(
//             <div className="background">
//                 <div className="card">
//                     <h1 className="heading">Counter</h1>
//                     <p className="counter">
//                         {
//                         this.state.counter}</p>
//                     <button className="btn" onClick={this.onIncreseBtn}>Increment</button>
//                     <button className="btn" onClick={this.onResetBtn}>
//                         Reset
//                         </button>
//                     <button className="btn" onClick={this.onDecrementBtn}>
//                         Decrement
//                         </button>
//              </div>
//             </div>
//         )
//     }

// }
class Counter extends Component{
    state={
        isLogin:false
    }
    handleBtn=()=>{
        this.setState({
            isLogin:!this.state.isLogin
        })
    }
    render(){
        // let text;
        // if(this.state.isLogin){
        //     text="Login";
        // }else{
        //     text="Logout"
        // }
        function text(isLogin){
            if(isLogin){
                return "login"
            }else{
                return "logout"
            }
        }
        function welcome(isLogin){
            if(!isLogin){
                return (<div>
                    <h1>welcome</h1>
                    <h1>User name</h1>
                    </div>
                        )
            }
        }
        return(
            <div>
            {/* <button onClick={this.handleBtn}>{text}</button> */}
            <h1>{this.state.isLogin?"logout":"login"}</h1>
            {welcome(this.state.isLogin)}
            <button onClick={this.handleBtn}>{text(this.state.isLogin)}</button>
            
        </div>
        )
    }
}
export default Counter