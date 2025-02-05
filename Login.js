import { useNavigate } from "react-router-dom";

function Login(){
    const Navigative=useNavigate()
    const UpdateData=()=>{
        Navigative("/home")
    }
    return(
        <div>
            <h1>Login Here</h1>
            <label>Full Name:</label>
            <input></input>
            <br></br>
            <label>Emailid:</label>
            <input></input>
            <button>Submit</button>
            <br></br>
            <br></br>
            <button onClick={UpdateData}>Home</button>
        </div>
    )
}
export default Login;