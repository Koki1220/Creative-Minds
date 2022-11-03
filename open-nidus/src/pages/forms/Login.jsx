import React,{useState} from 'react'
import {SiGnuprivacyguard} from 'react-icons/si'
import SectionHead from '../../components/SectionHead'
import Lgimage from '../../images/login.jpg'
import { NavLink,useNavigate} from 'react-router-dom'
import './login.css'
import axios from 'axios'
import SyncLoader from "react-spinners/SyncLoader";



const Login = () => {  
  
  
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate=useNavigate();

  const onSubmit= async (event)=>{      
      event.preventDefault();
      setIsLoading(true);

      if(email&&password){
        console.log({email,password});
       
      }   
      
      try {
        let data = {          
          "email" : email,
          "password" : password
        }
        await saveFormData(data).then(e=>{
          console.log(e);
          resetForm();
          setIsLoading(false);
          alert("Login successfully!");
          navigate('/reacttable')
          
        });
      }
      catch (e) {
          setIsLoading(false);
          alert("Unauthorized User!");
      }         
  }
    const resetForm = ()=>{
      setEmail('');
      setPassword('');
    }
  
    const saveFormData = async(data)=>{
      const res = await axios.post("http://localhost:9003/s3/smartavatar/api/users/login",data);
      if (res.status !== 200) {
        
      }
      return res;
    }





  return (
    <div>
      <SectionHead icon={<SiGnuprivacyguard/>} title="Login" className="login__head"/> 
      <div className='container login-container'>      
          <div className='login-back'>          
              <form onSubmit={onSubmit}>             
                  <input type='text' placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  <input type='password' placeholder='Password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <button type="submit" disabled={isLoading} className='signup-btn'>
                    {isLoading ? <span>Login <SyncLoader size={5} color="#ffffff" /> </span> : "Login"}
                    </button>
                  <lable className='lable-name'>New User ?<NavLink to='/registration'> Signup</NavLink></lable>
              </form>
              <div className='login-image'>
                <img src={Lgimage} alt='LoginImage'/>
            </div>
          </div>          
        </div>
   </div>

  )
}

export default Login