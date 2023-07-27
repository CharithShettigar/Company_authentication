import React from 'react'
import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import classes from './style.module.css'


let cardStyle={
  backgroundColor:"white",
  marginTop:"50px",
  fontSize:"15px",
  width:"60vw",
  borderRadius:"8px",
  padding: "3px 50px"
}


let inputStyle={
  padding: "7px 5px",
}

let labelStyle={
  fontSize: "15px",
  marginBottom: "0px",
  marginTop: "10px"
}

const Login = ({credentialList}) => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate();


  const login_submit=(e)=>{
    e.preventDefault();

    if (!email ||  !password ) {
      alert('Enter proper details')
    } else {

    let result=false
    credentialList.map((item,pos)=>{
        if (email===item.email && password===item.password ) {
          result=true
          setEmail('')
          setPassword('')
          navigate('/home');
        } 
    })


    if(!result) {
      alert("Wrong Login credential!!!")
    }
      
    }
  }

  return (

    <div className='container shadow' style={cardStyle}>
      <h2 className='text-center my-2'>Login</h2>
        <form onSubmit={login_submit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={labelStyle}>Email Address:</label>
              <input type="email" className="form-control m-auto" value={email} style={inputStyle} onChange={(e)=>setEmail(e.target.value)} name="" id="email" aria-describedby="emailHelpId" placeholder="Enter Email address" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={labelStyle}>Password:</label>
              <input type="password" className="form-control m-auto" value={password} style={inputStyle} onChange={(e)=>setPassword(e.target.value)} name="" id="password" placeholder="Enter password" />
            </div>

        <button type="submit" className="btn btn-primary m-auto d-block">Login</button>
        </form>
        <div className={classes.signup}>
            <p> Create Account?
            <Link className={classes.sign_link} to="/">SIGN UP</Link>
            </p>
        </div>

        {/* <ModalMsg /> */}
        
    </div>
    
    
    )
  }
  
  export default Login