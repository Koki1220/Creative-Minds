import React,{useState} from 'react'
import {SiGnuprivacyguard} from 'react-icons/si'
import { NavLink ,useNavigate} from 'react-router-dom';
import SectionHead from '../../components/SectionHead'
import './registration.css'
import Rgimage from '../../images/register.jpg'
import axios from 'axios'
import SyncLoader from "react-spinners/SyncLoader";

const Registration = () => {
    
    const navigate=useNavigate();
    const [firstname,setName]=useState("");
    const [secondname,setSecondName]=useState("");
    const [mobile,setMobile]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error]=useState();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event)=>{
      event.preventDefault();
      setIsLoading(true);

      if(firstname&&secondname&&mobile&&email&&password){        
        console.log({firstname,secondname,mobile,email,password});
        
      } 

      try {
        let requestParam = {
          "firstName" : firstname,
          "lastName" : secondname,
          "email" : email,
          "mobile" : mobile,
          "password" : password
        }
        await saveFormData(requestParam).then(e=>{
          console.log(e);
          alert("User Registration successfully!");
          resetForm();
          setIsLoading(false);
          navigate('/login')
        });
      } catch (e) {
        setIsLoading(false);
        alert("Registration failed!");
      }
    }
   

    const resetForm = ()=>{
      setName('');
      setSecondName('');
      setMobile('');
      setEmail('');
      setPassword('');
    }

    const saveFormData = async(requestParam)=>{
      const response = await axios.post("http://localhost:9003/s3/smartavatar/api/users",requestParam);
      if (response.status !== 200) {
        throw new Error(`Request failed: ${response.status}`); 
      }
      return response;
    }

  return (
    <div>
      <SectionHead icon={<SiGnuprivacyguard/>} title="Signup" className="signup__head"/> 
      <div className='container signup-container'>      
          <div className='signup-back'>    
                <div className='signup-image'>
                    <img src={Rgimage} alt='signupImage'/>
                </div>      
                <form onSubmit={onSubmit}>             
                    <input type='text' placeholder='First Name' required value={firstname} onChange={(e)=>setName(e.target.value)}/>
                    {error && firstname.length<=0?<lable>Enater The First Name</lable>:""}
                    <input type='text' placeholder='Last Name' required value={secondname} onChange={(e)=>setSecondName(e.target.value)}/>
                    {error && secondname.length<=0?<lable>Enater The Last Name</lable>:""}
                    <input type='text' placeholder='Mobile' required value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                    {error && mobile.length<=0?<lable>Enater The Mobile Number</lable>:""}
                    <input type='email' placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    {error && email.length<=0?<lable>Enater Email</lable>:""}
                    <input type='password' placeholder='Password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    {error && password.length<=0?<lable>Enater The Password</lable>:""}
                    <button type="submit" disabled={isLoading} className='signup-btn'>
                    {isLoading ? <span>Sign up <SyncLoader size={5} color="#ffffff" /> </span> : "Signup"}
                    </button>
                    <lable className='lable-name'>Already have a account ?<NavLink to='/login'> Login</NavLink></lable>
                </form>              
          </div>          
        </div>
   </div>   

  )
}

export default Registration