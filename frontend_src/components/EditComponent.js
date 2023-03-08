import React,{useState,useEffect} from 'react';
// import { AxiosContext } from 'react-axios/lib/components/AxiosProvider';
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios';
import"./EditComponent.css";

export default function EditComponent() {
  const navigate=useNavigate();

  const[id,setId]=useState();
  const[name,setName]=useState();
  const[dateOfBirth,setDateOfBirth]=useState();
  const[gender,setGender]=useState();
  const[email,setEmail]=useState();
  const[phoneNumber,setPhoneNumber]=useState();
  const[department,setDepartment]=useState();
  const[salary,setSalary]=useState();

  useEffect(() => {
    axios.get(`http://localhost:8080/faculty/${location.state.id}`)
    .then((res)=>{
        console.log(res.data)
        setId(res.data.id);
        setName(res.data.name);
        setDateOfBirth(res.data.dateOfBirth);
        setGender(res.data.gender);
        setEmail(res.data.email);
        setPhoneNumber(res.data.phoneNumber);
        setDepartment(res.data.department);
        setSalary(res.data.salary);
    })
  }, []);

  async function validateUser(e){
    e.preventDefault();
    await axios.post("http://localhost:8080/faculty",{
        id:id,
        name:name,
        dateOfBirth:dateOfBirth,
        gender:gender,
        email:email,
        phoneNumber:phoneNumber,
        department:department,
        salary:salary
    })
    alert("success");
    setId();
    setName();
    setDateOfBirth();
    setGender();
    setEmail();
    setPhoneNumber();
    setDepartment();
    setSalary();
    navigate("/")
  }
  console.log(name)
  const location=useLocation();
    return (
        <>{ 
        name &&
            <>
            <form>
                <h1>EDIT DETAILS</h1>
                   
                        <label>ID
                        <input type="text" 
                        className="form-control" 
                        placeholder="id" 
                        value={id}
                            onChange={(e)=>setId(e.target.value)}/>
                            </label>
                    <br></br>

                   
                        <label>NAME
                        <input type="text" 
                        className="form-control" 
                        placeholder="name"
                        value={name}
                            onChange={(e)=>setName(e.target.value)}/>
                            </label>
                    <br></br>

                    
                        <label>DATE OF BIRTH
                        <input type="date" 
                        className="form-control" 
                        placeholder="dob" 
                        value={dateOfBirth}
                        onChange={(e)=>setDateOfBirth(e.target.value)}/>
                        </label>
                    <br></br>

                    
                        <label>GENDER
                        <input
                            type="text"
                            className="form-control"
                            placeholder="gender"
                            value={gender}
                            onChange={(e)=>setGender(e.target.value)}/>
                            </label>
                    <br></br>

                   
                        <label>E-MAIL
                        <input
                            type="text"
                            className="form-control"
                            placeholder="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}/>
                            </label>
                    <br></br>

                    
                        <label>PHONE NUMBER
                        <input
                            type="text"
                            className="form-control"
                            placeholder="phoneNumber"
                            value={phoneNumber}
                            onChange={(e)=>setPhoneNumber(e.target.value)}/>
                            </label>
                    <br></br>

                   
                        <label>DEPARTMENT
                        <input
                            type="text"
                            className="form-control"
                            placeholder="department"
                            value={department}
                            onChange={(e)=>setDepartment(e.target.value)}/>
                            </label>
                    <br></br>

                    
                        <label>SALARY
                        <input
                            type="text"
                            className="form-control"
                            placeholder="salary"
                            value={salary}
                            onChange={(e)=>setSalary(e.target.value)}/>
                            </label>
                    <br></br>
                    <button type="submit" onClick={validateUser}>Submit</button>
            </form>
            </>
        }
        </>
    
  )
}
