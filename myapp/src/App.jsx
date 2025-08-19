// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import StudentCard from "./components/props/index.jsx"
// import Counter from "./componentss/counter/index.jsx"

// import StudentCard from "./componentsList/propsList/indexList.jsx"
import { Component } from "react"
import Clock from "./componentsClock/clock"
// function App() {
 

//   return (
//     <div>
//     <StudentCard name="sumi" age={28} isStudent={true}/>
//     <StudentCard name="ashok" age={29} isStudent={false}/>
//     <StudentCard name="mahadev"/>
//     <StudentCard name="srishty" age={6}/>
//     <StudentCard age={35}/>
   
//     </div>
//   )
// }
// const studentData=[
//   {
//     name:"ashok",
//     age:29,
//     isStudent:true
//   },
//    {
//     name:"sumi",
//     age:28,
//     isStudent:false
//   },
//    {
//     name:"srishty",
//     age:27,
//     isStudent:true
//   },
//    {
//     name:"bista",
//     age:26,
//     isStudent:false
//   },
//    {
//     name:"sri",
//     age:25,
//     isStudent:true
//   },
//    {
//     name:"srii",
//     age:24,
//     isStudent:false
//   },
// ]
// function App(){
//   return(
//     <div>
//       <ul>
//         {
//           studentData.map((student)=>(
//             <li key={student.id}>
//               <StudentCard
//               name={student.name}
//               age={student.age}
//               isStudent={student.isStudent}
//               />

//             </li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }

// day 2
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <ul>
//           {
//             studentData.map((eachStudent)=>(
//               <li key={eachStudent.id}>
//                 <StudentCard
//                 name={eachStudent.name}
//                 age={eachStudent.age}
//                 isStudent={eachStudent.isStudent}
//                 />
//               </li>
//             ))
//           }
//         </ul>
//       </div>
//     )
//   }
// }



// day 3
// class App extends Component{
//   // constructor(props){
//   //   super(props)
//   //   this.state={
//   //     isLogin:true
//   //   }
//   // } or
//   state={
//     isLogin:true
//   }
//   handleBtn=()=>{
//     this.setState({
//       isLogin:!this.state.isLogin
//     })
//   }

//   render(){
//     return(
//       <div>
//         <button onClick={this.handleBtn}>{this.state.isLogin?"login":"logout"}</button>
//       </div>
//     )
//   }
// }
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Counter/>
//       </div>
//     )
//   }
// }
import "./App.css"
class App extends Component{
  state={
    isShow:true
  }
  toggleBtn=()=>{
    this.setState({
      isShow:!this.state.isShow
    })
  }
  render(){
    const{isShow}=this.state
    return(
      <div className="background">
        <button className="btn" onClick={this.toggleBtn}>{isShow?"Hide":"show"}</button>
      {isShow && <Clock/>}
      </div>
    )
  }
}
export default App
