import React,{useState} from 'react'
import {SiGnuprivacyguard} from 'react-icons/si'
import { NavLink } from 'react-router-dom';
import SectionHead from '../../components/SectionHead'
import './registration.css'
import Rgimage from '../../images/register.jpg'
import axios from 'axios'
import { useAlert } from 'react-alert'
import SyncLoader from "react-spinners/SyncLoader";

const Registration = () => {
    
    const [firstname,setName]=useState("");
    const [secondname,setSecondName]=useState("");
    const [mobile,setMobile]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const alert = useAlert();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event)=>{
      event.preventDefault();
      setIsLoading(true);
      try {
        let requestParam = {
          "firstName" : firstname,
          "lastName" : firstname,
          "email" : firstname,
          "mobile" : firstname,
          "password" : firstname
        }
        await saveFormData(requestParam).then(e=>{
          console.log(e);
          alert.success("User Registration successfully!");
          resetForm();
          setIsLoading(false);
        });
      } catch (e) {
        setIsLoading(false);
        alert.error("Registration failed!");
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
      const response = await axios.post("http://smartavatar.opennidus.com/s3/smartavatar/api/users",requestParam);
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
                    <input type='text' placeholder='Last Name' required value={secondname} onChange={(e)=>setSecondName(e.target.value)}/>
                    <input type='text' placeholder='Mobile' required value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                    <input type='email' placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type='password' placeholder='Password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button type="submit" disabled={isLoading} className='signup-btn'>
                    {isLoading ? <span>Sign up <SyncLoader size={5} color="#ffffff" /> </span> : "Submit"}
                    </button>
                    <label className='lable-name'>Already have a account ?<NavLink to='/login'> Login</NavLink></label>
              </form>              
          </div>          
        </div>
   </div>   

  )
}

export default Registration