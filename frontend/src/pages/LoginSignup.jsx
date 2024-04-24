import React, { useState } from 'react'
import './CSS/login_signup.css'
import { toast } from 'react-toastify';


const LoginSignup = () => {

const [state,setstate] = useState("Login");
const [formData,setFormData] = useState({
  username:"",
  password:"",
  email:""
})

  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})

  }

//  const login = async () =>{
//   console.log("Login Function Executed", formData)

//   let responseData;
//   await fetch('http://localhost:4000/login',{
//     method: 'POST',
//     headers:{
//       Accept:'application/form-data',
//       'Content-Type':'application/json',
//     },
//     body: JSON.stringify(formData),
//   }).then((response)=> response.json()).then((data)=>responseData=data)

//   if(responseData.success){
//     localStorage.setItem('auth-token',responseData.token);
//     window.location.replace("/");
//   }else{
//     alert(responseData.errors)
//   }
  
//  }

const login = async () => {
  console.log("Login Function Executed", formData);

  let responseData;
  await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
  })
  .then((response) => response.json())
  .then((data) => responseData = data);

  if (responseData.success) {
    localStorage.setItem('auth-token', responseData.token);
    // Show toast message for successful login
    toast.success("Successfully logged in 👍");
    // Redirect to the home page
    setTimeout(() => {
      window.location.replace("/");
  }, 1000);
} else {
    // Show toast message for login error
    toast.error(responseData.error || responseData.errors);
}
}

const signup = async () => {
  // Validation for email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
  }

  // Validation for password format
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(formData.password)) {
      alert("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)");
      return;
  }

  // If email and password pass validation, proceed with signup
  let responseData;
  await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
  }).then((response) => response.json()).then((data) => responseData = data);

  if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      toast.success("Successfully Sign-Up 👍");
      setTimeout(() => {
        window.location.replace("/");
    }, 1000);
  } else {
      // alert(responseData.errors);
      toast.error(responseData.error || responseData.errors);
  }
}

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-field">
         {state ==="Sign Up" ?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name'/>:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"? <p className='loginsignup-login'>Already have an account? <span onClick={()=>{setstate("Login")}}>Login here</span></p>
        :<p className='loginsignup-login'>Create an Account? <span onClick={()=>{setstate("Sign Up")}}>Click Here</span></p>}
        
        
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continuing, I agree to the terms of  use & privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
