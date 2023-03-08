import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./AddComponent.css";
import { useNavigate } from 'react-router-dom';

export default function AddComponent() {
    const navigate=useNavigate();
    const url="http://localhost:8080/faculty"
    const [data, setData] = useState({
        // id:"",
        name:"",
        dateOfBirth:"",
        gender:"",
        email:"",
        phoneNumber:"",
        department:"",
        salary:"",
    })

    function submit(e){
        const obj = {
            // id:data.id,
            name:data.name,
            dateOfBirth:data.dateOfBirth,
            gender:data.gender,
            email:data.email,
            phoneNumber:data.phoneNumber,
            department:data.department,
            salary:data.salary,
            }
        e.preventDefault();
        axios.post(url,obj)
        .then(res => {
            console.log(obj)
        })
        alert("added successfully")
        navigate("/")
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)
    }
    // function apple(){
    //     alert("Submitted Succesfully");
    // }
    return ( 
        
        <div className="main">
            <div className="form">
                <div>

                <h1><center>Registration</center></h1>
                <form onSubmit={(e)=>submit(e)}>
                {/* <div className="text-border">
                    <input onChange={(e)=> handle(e)}  type="text" id="id" 
                    value={data.id} placeholder="id"/>
                </div> */}

                <div className="text-border">
                    <label>FACULTY NAME:</label>
                        <input  type="text" 
                        onChange={(e)=>{handle(e)}} id="name" 
                        value={data.name}/>  
                </div><br></br>

                <div className="text-border">
                    <label>DATE OF BIRTH:</label>
                        <input type="date" 
                        onChange={(e)=>{handle(e)}} id="dateOfBirth" 
                        value={data.dateOfBirth}/>   
                </div><br></br>

                <div className="text-border">
                    <label>GENDER:</label>
                        <input type="text" 
                        onChange={(e)=>{handle(e)}} id="gender" 
                        value={data.gender}/>  
                         
                </div><br></br>

                <div className="text-border">
                    <label>E-MAIL:</label>
                        <input type="text"
                        onChange={(e)=>{handle(e)}} id="email" 
                        value={data.email}/>
                </div><br></br>

                <div className="text-border">
                    <label>PHONE NUMBER:</label>
                        <input type="text" 
                        onChange={(e)=>{handle(e)}} id="phoneNumber" 
                        value={data.phoneNumber}/>
                </div><br></br>

                <div className="text-border">
                    <label>DEPARTMENT:</label>
                    <input type="text"
                    onChange={(e)=>{handle(e)}} id="department" 
                    value={data.department}/>
                </div><br></br>

                <div className="text-border">
                    <label>SALARY:</label>
                    <input type="text"
                    onChange={(e)=>{handle(e)}}id="salary" 
                    value={data.salary}/>
                </div><br></br>

                <div className="but">
                    <button onClick={submit}>Submit</button>
                </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
