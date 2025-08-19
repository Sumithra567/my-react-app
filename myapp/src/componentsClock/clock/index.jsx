import { Component } from "react";
import "./index.css"

class Clock extends Component{
    state={
         time:new Date() //it gives time date day
    }
    componentDidMount(){
        this.clock=setInterval(()=>{
            this.setState({
                time:new Date()
            })
        },1000) //to update every sec
    }
    componentWillUnmount(){
        clearInterval(this.clock)
    }

    render(){
        const{time}=this.state
        // console.log(this.state.time.toLocaleTimeString())//it gives only time
        return(
            <div className="card">
                <h1 className="heading">Digital Clock</h1>
                <p className="paragraph">{time.toLocaleTimeString()}</p>
            </div>
        )
    }
}
export default Clock;