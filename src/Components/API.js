import axios from "axios";
import React, { useEffect, useState } from "react";

function API(){
    const[Userdata,setUserdata]=useState([])
    useEffect(()=>{
        axios.get("https://622eda275c86fd315eb65e57.mockapi.io/employees/employees").then(
            res=>{
                console.log(res,"res");
                setUserdata(res.data)
            }
        )
    },[])
    return(
        <>
            <div><h1>API INTEGRATIONS</h1></div>
            <ol>
                {Userdata.map((user)=>{
                    return(
                        <li>{user.name}</li>
                    )
                })}
            </ol>
        </>
        
    )
}

export default API