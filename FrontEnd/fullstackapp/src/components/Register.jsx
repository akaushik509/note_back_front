import { useState } from "react"
import {  NavLink } from "react-router-dom";

const Register=()=>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    

    const handleSubmit=()=>{
        const payload={
            name,
            email,
            pass
        }
        fetch("https://erin-enthusiastic-cow.cyclic.app/users/register",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/json"
            }
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return (
        <>
            <div>Registration Page</div>
            <NavLink to="/login">Login User</NavLink>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter Password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export {Register}