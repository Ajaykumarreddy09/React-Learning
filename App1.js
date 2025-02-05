//JSX-->javascript extention
//JSX components
//2 types of omponents
//1.functional components -> state less components
//JSX rules
//1.function key word
//2.function component should start with alpha numeric character.. capital letter
//3.return keyword is required
//4.any one html block element is required -->div,main,section,aside,article

import PropTypes, { func } from "prop-types";
import { createContext, useContext } from "react";
import { useEffect, useRef, useState } from "react";

//2.class based component-> state full components
//JXS rules
//1.class keyword
//2.class component name should be start with alpha numeric char
//3.extends keyword 
//4.react.component module
//5. renderfunction(){}
//6.return keyword
//7.Any one html block element


//Import and Export
//Export
//2 types of export methods --> import methods

//1.export keyword-->{component name}
//2.export default keyword --> component name

//open tag--> <> br,img, input, hr, src
//close tag --</> <br><br/> --> <br/>

// function App(){
//     return(
//         <div>
//             <h1>React-Application</h1>
//         </div>
//     )
// }
// export default App;

// why stateless and state full component?
//ans: stateless--> in functional component we cant directly implement  state and all so it is stateless.
// statefull--> directly we are implementing a state function in class component so it is statefull

//npx--> node package extension
//npm --> node package manager
//jsx--> javascript extension

//export default--> we need to export after the component
//export default --> we can export only once in a file
//export--> we need to export before the component
//export --> we can use n number of times in a file

// function App(){
//     return (
//         <div>
//             <h1> React Application</h1>
//             <input/>
//         </div>
//     )
// }
// export default App;

//creating class component

// import React from "react";
// export class App extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>class based component</h1>
//                 <ul>
//                     <li>HTML</li>
//                     <li>CSS</li>
//                 </ul>
//                 <ol type="A">
//                     <li>javascript</li>
//                     <li>
//                         react
//                     </li>
//                 </ol>
//             </div>
//         )
//     }
// }

// writing css code
//2 ways--> 1. inline css , 2.external css
//1.inline css--> html style="stylings" style={{}}
//2.external css--> css file --> html link import  // import "./css file name" 

// import "./style.css"
// function App(){
//     return(
//         <div>
//             <table style={{width:"100%",textAlign:"center"}}>
//                 <thead>
//                     <tr>
//                         <th>S.NO</th>
//                         <th>FullName</th>
//                         <th>City</th>
//                         <th>state</th>
//                         <th>country</th>
//                         <th>contact</th>
//                         <th>emaiid</th>
//                         <th>salary</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>    
//                       <td>1</td>
//                       <td>Ajay</td>
//                       <td>banglore</td>
//                       <td>KA</td>
//                       <td>IND</td>
//                       <td>1234</td>
//                       <td>Ajay@mil</td>
//                       <td>500000</td>
//                     </tr>
//                     <tr>    
//                       <td>2</td>
//                       <td>Ajay1</td>
//                       <td>banglore</td>
//                       <td>KA</td>
//                       <td>IND</td>
//                       <td>1234</td>
//                       <td>Ajay@mil</td>
//                       <td>500000</td>
//                     </tr>
//                     <tr>    
//                       <td>3</td>
//                       <td>Ajay2</td>
//                       <td>banglore</td>
//                       <td>KA</td>
//                       <td>IND</td>
//                       <td>1234</td>
//                       <td>Ajay@mil</td>
//                       <td>500000</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
    
// }
// export default App;

//composition --> combining one component into another component it creates as a new component 
//components--> 1. functional 2. class based components 

// function App1(){
//     return(
//         <div>
//             <h1>functional component</h1>
//             <h1>1 st component</h1>
//             <App2/>
//         </div>
//     )
// }
// export default App1;
// function App2(){
//     return(
//         <div>
//             <h1>2nd component</h1>
//             <App3/>
//         </div>
//     )
// }
// function App3(){
//     return(
//         <div>
//             <h1>3rd component</h1>
//             <App4/>
//         </div>
//     )
// }
// function App4(){
//     return(
//         <div>
//             <h1>4th component</h1>
//             <App5/>
//         </div>
//     )
// }
// function App5(){
//     return(
//         <div>
//             <h1>5th component</h1>
//         </div>
//     )
// }


// function App1(){
//     return(
//         <div>
//             <h1>functional component</h1>
//             <h1>1 st component</h1>
//             <App2/>
//             <App4/>
//             <App5/>
//         </div>
//     )
// }
// export default App1;
// function App2(){
//     return(
//         <div>
//             <h1>2nd component</h1>
//         </div>
//     )
// }
// function App3(){
//     return(
//         <div>
//             <h1>3rd component</h1>
//         </div>
//     )
// }
// function App4(){
//     return(
//         <div>
//             <h1>4th component</h1>
//         </div>
//     )
// }
// function App5(){
//     return(
//         <div>
//             <h1>5th component</h1>
//         </div>
//     )
// }

// class based component

// import React from "react";
// export class App1 extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>class based component</h1>
//                 <h2>1st component</h2>
//                 <App2/>
//             </div>
//         )
//     }
// }
// class App2 extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h2>2nd component</h2>
//                 <App3/>
//             </div>
//         )
//     }
// }
// class App3 extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h2>3rd component</h2>
//                 <App4/>
//             </div>
//         )
//     }
// }
// class App4 extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>
//                     4th component
//                 </h1>
//                 <App5/>
//             </div>
//         )
//     }
// }
// class App5 extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>5th component</h1>
//             </div> 
//         )
//     }
// }

// import React from "react";
// export class App1 extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>class based component</h1>
//                 <h2>1st component</h2>
//                 <App2/>
//                 <App5/>
//                 <App4/>
//                 <App3/>
//             </div>
//         )
//     }
// }
// class App2 extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h2>2nd component</h2>
//             </div>
//         )
//     }
// }
// class App3 extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h2>3rd component</h2>
//             </div>
//         )
//     }
// }
// class App4 extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>
//                     4th component
//                 </h1>
//             </div>
//         )
//     }
// }
// class App5 extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>5th component</h1>
//             </div> 
//         )
//     }
// }

//props--> properties
//pass the information from one component into another component.
//the props will be immutable object (cannnot modify)
// pass the info by -->{properties name}
//creating properties names --> By using props keyword
// applicable for functional component as well as class based components

//by using functional comp
// function App1(props){
//     return(
//         <div>
//             <h1>props-methods</h1>
//             <p>
//                 Name:{props.name}
//             </p>
//             <p>
//                 City:{props.city}
//             </p>
//             <p>
//                 state:{props.state}
//             </p>
//             <p>
//                 Country:{props.country}
//             </p>
//             <p>
//                 contact:{props.contact}
//             </p>
//         </div>
//     )
// }
// function App2(){
//     return(
//         <div>
//             <h1>props- info</h1>
//             <App1 name="Ajay" city="banglore" state="KA" country="IND" contact="12345"/>
//         </div>
//     )
// }
// export default App2;

//Destructring -->which is used to make multiline props to single line props 
//prop-types--> which is used to validate your properties data types
//Routers--> which is used to link the components from one to another 

// state --> initialization or initial value --> to pass the information inside the component
// state--> declaration -->{}
// state is mutable object 

//setState--> which is used to update the state values 
// 2 methods 
//1.constructor() --> it is a function which is used to create instance of object 
// created by -->this.--> keyword
//2.without constructor()  --> these 2  are applicable for only classes 

// import React from "react";
// class App extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             name:"Ajay",
//             city:"Banglore",
//             state:"KA",
//             country:"IND",
//             contact:12345
//         }
//     }
//     // arrow func-->const functionname=()=>{}
//         //functionname=()=>{}
//             myupdate=()=>{
//                 this.setState({
//                     name:"vijay",
//                     city:"Banglore",
//                     state:"KA",
//                     counttry:"IND",
//                     contact:1234
//                 })
//             }
//     render(){
//         return(
//             <div>
//                 <h1>State method</h1>
//                 <p>
//                     name:{this.state.name} 
//                 </p>
//                 <p>
//                     city:{this.state.city}
//                 </p>
//                 <p>
//                     state:{this.state.state}
//                 </p>
//                 <p>
//                     country:{this.state.country}
//                 </p>
//                 <p>
//                     contact:{this.state.contact}
//                 </p>
//                 <button onClick={this.myupdate}>update</button>
//             </div>
//         )
//     }
// }
// export default App;

//props implementation in class based component
// import React from "react";
// class App extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>
//                     Props-method
//                 </h1>
//                 <p>
//                     id:{this.props.id}
//                 </p>
//                 <p>
//                     Book:{this.props.book}
//                 </p>
//                 <p>
//                     Author:{this.props.author}
//                 </p>
//                 <p>
//                     Country:{this.props.country}
//                 </p>
//                 <p>
//                     Contact:{this.props.contact}
//                 </p>
//             </div>
//         )
//     }
// }
// class App1 extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>prop-info</h1>
//                 <App id='1' book="react" author="jhon" country="IND" contact="123456"/>
//             </div>
//         )
//     }
// }
// export default App1;

//Destructring --> which is used to make multiline props to single line props 

// import React from "react";
// class App extends React.Component{
//     render(){
//         const{id,book,author,country,contact}=this.props
//         return(
//             <div>
//                 <h1>
//                     Props-method
//                 </h1>
//                 <p>
//                     id:{id}
//                 </p>
//                 <p>
//                     Book:{ book}
//                 </p>
//                 <p>
//                     Author:{author}
//                 </p>
//                 <p>
//                     Country:{country}
//                 </p>
//                 <p>
//                     Contact:{contact}
//                 </p>
//             </div>
//         )
//     }
// }
// class App1 extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>prop-info</h1>
//                 <App id='1' book="react" author="jhon" country="IND" contact="123456"/>
//             </div>
//         )
//     }
// }
// export default App1;

//Destructring in functional component

// function App(props){
//     const{a,b}=props
//     return(
//         <div>
//             <p>Name:{a}</p>
//             <p>City:{b}</p>
//         </div>
//     )
// }
// function App1(){
//     return(
//         <div>
//             <h1>Hello world..</h1>
//             <App a="Ajay" b="Banglore"/>
//         </div>
//     )
// }
// export default App1

//props-types- which is used to validate your property data type
//propTypes-->Module-->prop-types package
//comment --> npm intall prop-types

// import propTypes from "prop-types";
// function App(props){
//     const{a,b,c,d,e}=props
//     return(
//         <div>
//             <h1>prop-types</h1>
//             <p>Name:{a}
//             </p>
//             <p>
//                 City:{b}
//             </p>
//             <p>
//                 State:{c}
//             </p>
//             <p>
//                 Country:{d}
//             </p>
//             <p>
//                 Contact:{e}
//             </p>
//         </div>
//     )
// }
// App.propTypes={
//     a:PropTypes.string,
//     b:PropTypes.string,
//     c:PropTypes.string,
//     d:PropTypes.string,
//     e:PropTypes.number

// }
// App.defaultProps={
//     a:"Ajay",
//     b:"Banglore",
//     c:"KA",
//     d:"IND",
//     e:1234
// }
// export default App;

//Routers--> used to link the components from one component to another component
//Anchor tag--> used to link the page from one page to another page
//Router
//Route
//Routes
//Link
//react-router-dom above modules are in this
// to install above pakage command is--> npm install react-router-dom
// Routers are applicable for Functional and Class


// import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
// import Home from "./Home.js";
// import About from "./About.js";
// import "./App.css";
// function App(){
//     return(
//         <div>
//             <Router>
//             <ul>
//                 <li>
//                     <link to="/home">Home</link>
//                 </li>
//                 <li>
//                     <link to="/b">About</link>
//                 </li>
//                 <li>
//                     Contact
//                 </li>
//                 <li>
//                     Services
//                 </li>
//                 <li>
//                     <link to="/c">Login</link>
//                 </li>
//             </ul>
//             <Routes>
//                 <Route path="/home" element={<Home/>}></Route>
//                 <Route path="/b" element={<About/>}></Route>
//                 <Route path="/c" element={<Login/>}></Route>
//             </Routes>
//             </Router>   
//         </div>
//     )
// }
// export default App;

//state--> initial value--> pass the information inside the component
//setState-->which is used to update your state values -->update values

//Hooks methods--> to increase the application performance we use hooks methods
//1.useState()--> state and setState is called useState hook method

//2.useEffect()-->it execute to make some functions automatically and it executes repeatedly.

//3.useContext()-->pass the information from first to last component

//4.useRef()--> It returns mutable objects-->e.target.value-->useRef.current.value

//5.PropsDrilling()--> Pass the information one by one in the components

//These methods are only applicable for functional components.
//when we are are using these methods we should import the hooks

// function App(){
//     const[data,setData]=useState("Frontend..")
//     const[count,setCount]=useState(0)

//     const inc=()=>{
//         setCount(count+1)
//     }
//     const dec=()=>{
//         setCount(count-1)
//     }
//     const reset=()=>{
//         setCount(0)
//     }
//     const updateData=()=>{
//         setData("Backend..!")
//     }
//     return(
//         <div>
//             <h1>Hello World</h1>
//             <h2>{data}</h2>
//             <button onClick={updateData}>Update</button>
//             <h1>count:{count}</h1>
//             <button onClick={inc}>INC</button>
//             <button onClick={dec}>DEC</button>
//             <button onClick={reset}>RESET</button>
//         </div>
//     )
// }
// export default App;

// use effect function

// function App(){
//     const[data,setData]=useState("Frontend..")
//     const[count,setCount]=useState(0)

//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount(count+1)
//         },2000)
//     })
//     const dec=()=>{
//         setCount(count-1)
//     }
//     const reset=()=>{
//         setCount(0)
//     }
//     const updateData=()=>{
//         setData("Backend..!")
//     }
//     return(
//         <div>
//             <h1>Hello World</h1>
//             <h2>{data}</h2>
//             <button onClick={updateData}>Update</button>
//             <h1>count:{count}</h1>
            
//             <button onClick={dec}>DEC</button>
//             <button onClick={reset}>RESET</button>
//         </div>
//     )
// }
// export default App;

// using dependency array '[]' to execute usestate method only once instead of repeating

// function App(){
//     const[data,setData]=useState("Frontend..")
//     const[count,setCount]=useState(0)

//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount(count+1)
//         },1000)
//     },[])
//     const dec=()=>{
//         setCount(count-1)
//     }
//     const reset=()=>{
//         setCount(0)
//     }
//     const updateData=()=>{
//         setData("Backend..!")
//     }
//     return(
//         <div>
//             <h1>Hello World</h1>
//             <h2>{data}</h2>
//             <button onClick={updateData}>Update</button>
//             <h1>count:{count}</h1>
            
//             <button onClick={dec}>DEC</button>
//             <button onClick={reset}>RESET</button>
//         </div>
//     )
// }
// export default App;

// use context hook continuation
// function App(){
//     const[data,setData]=useState("hello we are learning useContext method..!")
//     const myupdate=()=>{
//         setData("Backend")
//     }
//     return(
//         <div>
//             <h1>UseState-Hook</h1>
//             <p>{data}</p>
//             <button onClick={myupdate}>Update</button>
//         </div>
//     )
// }
// export default App;

// function App(){
//     const[data,setData]=useState("hello we are learning useContext method..!")
//     return(
//         <div>
//             <h1>UseState-Hook</h1>
//             <h2>1 st component</h2>
//             <App1 value={data}/>
            
//         </div>
//     )
// }
// function App1({value}){
//     return(
//         <div>
//             <h2>2 nd component</h2>
//             <App2 value={value}/>
//         </div>
//     )
// }
// function App2({value}){
//     return(
//         <div>
//             <h2>3 rd component</h2>
//             <App3 value={value}/>
//             {value}
//         </div>
//     )
// }
// function App3({value}){
//     return(
//         <div>
//             <h2>4 th component</h2>
//             <App4/>
//             {value}
//         </div>
//     )
// }
// function App4(){
//     return(
//         <div>
//             <h2>5th component</h2>
//         </div>
//     )
// }

// export default App;

//use context==> pass tthe information from first component into last component
//major 3 types:
// they are:
//1.createContext() -->create function first
//2.provider()--> provide the values / data
//3.consumer-->fetch the values
// function App(){
//     const[data,setData]=useState("hello we are learning useContext method..!")
//     const myupdate=()=>{
//         setData("Backend")
//     }
//     return(
//         <div>
//             <h1>UseState-Hook</h1>
//             <p>{data}</p>
//             <button onClick={myupdate}>Update</button>
//         </div>
//     )
// }
// export default App;

// const Context=createContext()
// function App(){
//     const[data,setData]=useState("hello we are learning useContext method..!")
//     return(
//         <div>
//             <Context.Provider value={data}>
//             <h1>UseState-Hook</h1>
//             <h2>1 st component</h2>
//             <App1/>
//             </Context.Provider>
       
//         </div>
//     )
// }
// function App1(){
//     return(
//         <div>
//             <h2>2 nd component</h2>
//             <App2/>
//         </div>
//     )
// }
// function App2(){
//     return(
//         <div>
//             <h2>3 rd component</h2>
//             <App3 />
           
//         </div>
//     )
// }
// function App3(){
//     return(
//         <div>
//             <h2>4 th component</h2>
//             <App4/>
           
//         </div>
//     )
// }
// function App4(){
//     const value=useContext(Context)
//     return(
//         <div>
//             <h2>5th component</h2>
//             {value}
//         </div>
//     )
// }

// export default App;


//Fire Base==> DB ==> we can perform avuthentication
//Email and password

// import { signup,signIn,logOut } from "./Fire";
// function App(){
//     const [loading,setLoading]=useState(false)

//     const emailRef=useRef()
//     const passwordRef=useRef()

//     async function mySignup() {
//         setLoading(true)
//         await signup(emailRef.current.value,passwordRef.current.value)
//         setLoading(false)
//     }



//     return(
//         <div>
//             <center>
//                 <h1>Fire-Base</h1>
//                 <label>Email:</label>
//                 <input type="email" ref={emailRef}></input><br></br><br></br>
//                 <label>password:</label>
//                 <input type="password" ref={passwordRef}></input><br></br><br></br>
//                 <button onClick={mySignup}>SIGNUP</button>
//                 <button>SIGNIN</button>
//                 <button>SIGNOUT</button>
//             </center>
//         </div>
//     )
// }
// export default App;












































































































































































































































