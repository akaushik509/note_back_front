import { useEffect, useState } from "react"
import {  NavLink } from "react-router-dom";

const AllNotes=()=>{
    const [notes,setNotes] = useState("")
  
    useEffect(()=>{
        getNotes();
    },[])

    
const getNotes = () =>{
    return fetch("https://erin-enthusiastic-cow.cyclic.app/notes",{
        headers:{
            "Authorization":localStorage.getItem("token")
        }
    }).then(res=>res.json())
    .then(res=>{
        console.log(res)
        setNotes(res)
    })
    .catch(err=>console.log(err)) 
};

   /*  const handleGetNotes = () => {    
        getNotes()
          .then((res) => {
            setNotes(res);
            console.log(res);
          })
          .catch((err) => {
            console.log(err)
          });
      }; */


    const deleteNote=(noteID)=>{
        fetch(`https://erin-enthusiastic-cow.cyclic.app/notes/delete/${noteID}`,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json",
                "Authorization":localStorage.getItem("token")
            }
        }).then((res) => {
            res.json()
            getNotes()
        })
        
    }

    const updateNote=(noteID)=>{
        let t = prompt("Enter Text")
        const updatedData={
            title:t
        }
        fetch(`https://erin-enthusiastic-cow.cyclic.app/notes/update/${noteID}`,{
            method:"PATCH",
            body:JSON.stringify(updatedData),
            headers:{
                "Content-Type": "application/json",
                "Authorization":localStorage.getItem("token")
            }
        }).then((res) => {
            res.json()
            getNotes()
        })
    }

    return (
        <>
            <div>Notes Create Page</div>
            <NavLink to="/createnotes">Create Notes</NavLink>
            {
                notes&&notes?notes.map((e)=>{
                    return(
                        <>
                            <h2>Title: {e.title}</h2>
                            <p>Body: {e.body}</p>
                            <button onClick={()=>deleteNote(e._id)}>Delete</button>
                            <button onClick={()=>updateNote(e._id)}>Update</button>
                            <hr></hr>
                        </>
                    )
                }):<h1>No Notes</h1>
            }
            
        </>
    )
}

export {AllNotes}