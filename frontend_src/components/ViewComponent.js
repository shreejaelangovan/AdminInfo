import React from 'react'
import {useState,useEffect} from 'react';
// import { AxiosContext } from 'react-axios/lib/components/AxiosProvider';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "./ViewComponent.css";

export default function ViewComponent() {
    const location=useLocation();
    const[value,setValue]=useState();
    useEffect(()=>{
        axios.get(`http://localhost:8080/faculty/${location.state.id}`)
        .then((res)=>{
        setValue(res.data);
        console.log(value)}

        )
    },[])
  return (
    <>{
        value&&<>
        <h1 id='details'>DETAILS ID-{value.id}</h1>
        {/* <h3>FACULTY ID     : {value.id}</h3> */}
        <h3>FACULTY NAME   : {value.name}</h3>
        <h3>DATE OF BIRTH  : {value.dateOfBirth}</h3>
        <h3>GENDER : {value.gender}</h3>
        <h3>E-MAIL : {value.email}</h3>
        <h3>PHONE NUMBER : {value.phoneNumber}</h3>
        <h3>DEPARTMENT  : {value.department}</h3>
        <h3>SALARY : {value.salary}</h3>
        </>
    }
    </>
  )
}
