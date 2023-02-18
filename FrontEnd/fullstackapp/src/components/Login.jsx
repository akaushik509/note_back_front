import { useState } from "react"
import {  NavLink } from "react-router-dom";

const Login=()=>{
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")

    const handleSubmit=()=>{
        const payload={
            email,
            pass
        }
        fetch("https://erin-enthusiastic-cow.cyclic.app/users/login",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/json"
            }
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            localStorage.setItem("token",res.token)
        })
        .catch(err=>console.log(err))
    }
    return (
        <>
            <div>Login Page</div>
            <NavLink to="/createnotes">Create Notes</NavLink>
            <NavLink to="/allnotes">View Notes</NavLink>
            <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter Password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <button onClick={handleSubmit}>Login</button>
        </>
    )
}

export {Login}