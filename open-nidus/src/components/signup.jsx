import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SyncLoader from "react-spinners/SyncLoader";
import axios from 'axios'
import { useAlert } from 'react-alert'

export default function Signup(props) {
    const alert = useAlert();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset  } = useForm();
    const onSubmit = async (data) => {
        setIsLoading(true);
        console.log(data);
        try{
            const res = await axios.post("http://smartavatar.opennidus.com/s3/smartavatar/api/users/", data)
            console.log(res.data);
            alert.success("User Sing in successfully!");
            setIsLoading(false);
            reset();
          }
          catch(e){
            console.log(e)
            alert.error(e.message);
            setIsLoading(false);
          }
    }

    
    return (
        <div className='container contact__container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    First Name:
                    <input type="text" name="firstName"
                        {...register("firstName", { required: true, maxLength: 10 })}
                    />
                </label>
                {errors.firstName && <p>Please check the First Name maximum 10 characters</p>}
                <label>
                    Last Name:
                    <input type="text" name="LastName"
                        {...register("lastName", { required: true, maxLength: 10 })}
                    />
                </label>
                {errors.lastName && <p>Please check the Last Name maximum 10 characters</p>}
                <label>
                    email:
                    <input type="text" name="email"
                        {...register("email", { required: true })}
                    />
                </label>
                {errors.email && <p>Please check the email</p>}
                <label>
                    mobile:
                    <input type="text" name="mobile"
                        {...register("mobile", { required: true })}
                    />
                </label>
                {errors.mobile && <p>Please check the mobile number</p>}
                <label>
                    Password:
                    <input type="password" name="password"
                        {...register("password", { required: true })}
                    />
                </label>
                {errors.password && <p>Please check the password</p>}

                <button type="submit" value="Submit" className='contact__btn'
                    disabled={isLoading} >
                    {isLoading ? <span>Loading <SyncLoader size={5} color="#ffffff" /> </span> : "Submit"}
                </button>
            </form>
        </div>
    );
}