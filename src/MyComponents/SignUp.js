import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './style.module.css'

const SignUp = (props) => {


  let cardStyle={
    backgroundColor:"white",
    marginTop:"10px",
    fontSize:"10px",
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

    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [conf_password,setConfPassword]=useState('')


    const sign_submit=(e)=>{
        e.preventDefault();

        function checkPassword(str)
        {
            var passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
            return passwordRegex.test(str);
        }

        function checkUsername(str){
          var usernameRegex = /^[A-Za-z_.]+$/
          return usernameRegex.test(str)
        }

        if (!email || !name || !password  ) {
          alert('Enter proper details')
        } else  if(!checkUsername(name)){
          alert("Username can only have characters, underscore, period")
        } else  if(!checkPassword(password)){
          alert("Password is weak: Use 6 characters,Uppercase, lowercase, Number, Special Character")
        } 
        else if(!(password===conf_password)) {
          alert("Password are not matching")
          }
          else{
          props.addCredential(email, name,password)
          setEmail('')
          setName('')
          setPassword('')
          setConfPassword('')
          
          alert("You successfully created the account")
        }
    }


  return (
    <div className='container shadow' style={cardStyle}>
      <h2 className='text-center my-2'>Sign Up</h2>

        <form onSubmit={sign_submit}>
            <div className="mb-2">
              <label htmlFor="name" className="form-label" style={labelStyle}>User Name:</label>
              <input type="text" style={inputStyle} className="form-control" name="" value={name} id="name " onChange={(e)=>setName(e.target.value)} aria-describedby="helpId" placeholder="Enter name" required />
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="form-label" style={labelStyle}>Email Address:</label>
              <input type="email" style={inputStyle} className="form-control m-auto" name="" value={email} id="email" onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelpId" placeholder="Enter Email address" required />
            </div>

            <div className="mb-2">
              <label htmlFor="password" className="form-label" style={labelStyle}>Password:</label>
              <input type="password" style={inputStyle} className="form-control m-auto" name="" value={password} id="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" required />
            </div>

            <div className="mb-2">
              <label htmlFor="conf_password" className="form-label" style={labelStyle}>Confirm Password:</label>
              <input type="password" style={inputStyle} className="form-control m-auto" name="" value={conf_password} id="conf_password" onChange={(e)=>setConfPassword(e.target.value)} placeholder="Confirm password" required />
            </div>

            <button type="submit" className="btn btn-primary m-auto d-block" >Sign Up</button>

        </form>
        <div className={classes.signup }>
          <p> Already Signed In?  
            <Link className={classes.sign_link} to="/login">LOGIN</Link>
          </p>
        </div>
    </div>
  )
}

export default SignUp