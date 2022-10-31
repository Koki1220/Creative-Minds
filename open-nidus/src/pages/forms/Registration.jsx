import React,{useState} from 'react'
import {SiGnuprivacyguard} from 'react-icons/si'
import { NavLink } from 'react-router-dom';
import SectionHead from '../../components/SectionHead'
import './registration.css'
import Rgimage from '../../images/register.jpg'
import axios from 'axios'


const Registration = () => {
    
    const [firstname,setName]=useState("");
    const [secondname,setSecondName]=useState("");
    const [mobile,setMobile]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const collectData=()=>{
        console.log({firstname,secondname,mobile,email,password});
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
      <SectionHead icon={<SiGnuprivacyguard/>} title="Signup" className="signup__head"/> 
      <div className='container signup-container'>      
          <div className='signup-back'>    
                <div className='signup-image'>
                    <img src={Rgimage} alt='signupImage'/>
                </div>      
                <form>             
                    <input type='text' placeholder='First Name' required value={firstname} onChange={(e)=>setName(e.target.value)}/>
                    <input type='text' placeholder='Last Name' required value={secondname} onChange={(e)=>setSecondName(e.target.value)}/>
                    <input type='text' placeholder='Mobile' required value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                    <input type='email' placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type='password' placeholder='Password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button className='signup-btn' onClick={collectData}>Sign up</button>
                    <lable className='lable-name'>Already have a account ?<NavLink to='/login'> Login</NavLink></lable>
              </form>              
          </div>          
        </div>
   </div>   

  )
}

export default Registration