import { useState } from "react"
import {  NavLink } from "react-router-dom";

const CreateNotes=()=>{
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")

    const handleSubmit=()=>{
        const payload={
            title,
            body
        }
        fetch("https://erin-enthusiastic-cow.cyclic.app/notes/create",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/json",
                "Authorization":localStorage.getItem("token")
            }
        }).then(res=>res.json())
        .then(res=>{
            console.log("submit",res)
            //localStorage.setItem("token",res.token)
        })
        .catch(err=>console.log(err))
    }
    return (
        <>
            <div>Notes Create Page</div>
            <NavLink to="/createnotes">Create Notes</NavLink>
            <NavLink to="/allnotes">View Notes</NavLink>
            <input type="text" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" placeholder="Enter Body" value={body} onChange={(e)=>setBody(e.target.value)}/>
            <button onClick={handleSubmit}>Add Note</button>
        </>
    )
}

export {CreateNotes}