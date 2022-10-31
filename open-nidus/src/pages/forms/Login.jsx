import React,{useState} from 'react'
import {SiGnuprivacyguard} from 'react-icons/si'
import SectionHead from '../../components/SectionHead'
import Rgimage from '../../images/login.jpg'
import { NavLink} from 'react-router-dom'
import './login.css'
import axios from 'axios'


const Login = () => {  

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const collectData=()=>{
      console.log(email,password);
      try{
        axios.post("http://smartavatar.opennidus.com/s3/smartavatar/api/users",{}).then(result=>{
          console.log(result);
          
        })
      }
      catch(e){
        console.log(e)
        alert.error(e.message);
        
      }
  }

  return (
    <div>
      <SectionHead icon={<SiGnuprivacyguard/>} title="Login" className="login__head"/> 
      <div className='container login-container'>      
          <div className='login-back'>          
                <form>             
                  <input type='text' placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  <input type='password' placeholder='Password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <button className='login-btn' onClick={collectData}>Login</button>
                  <lable className='lable-name'>New User ?<NavLink to='/registration'> Signup</NavLink></lable>
              </form>
              <div className='login-image'>
                <img src={Rgimage} alt='LoginImage'/>
            </div>
          </div>          
        </div>
   </div>

  )
}

export default Login