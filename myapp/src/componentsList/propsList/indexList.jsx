import React from "react"
import { Component } from "react"
class StudentCard extends React.Component{
    
        constructor(props){
            super(props)

        }
    render(){
        return(
            <div>
                <h1>Name:{this.props.name}</h1>
                <h2>Age:{this.props.age}</h2>
                <h2>IsStudent:{this.props.isStudent}</h2>
            </div>
        )

    }
}
// function StudentCard(props){
     
//     return(
//         <div>
//              <h1>Name:{props.name}</h1>
//             <h2>Age:{props.age}</h2>
//             <h2>isStudent:{props.isStudent?"yes":"no"}</h2> 
            

            
//         </div>
//     )
// }

export default StudentCard