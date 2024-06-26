
import { useState } from 'react'
import './login.css'

const Login =()  =>{
    const[avatar,setAvatar] = useState(
        {
            file:null,
            url:""
        }
    )
    const handleAvatar = e =>{
        setAvatar({
            file:e.target.files[0],
            url:URL.createObjectURL(e.target.files[0])
        })
    }
    return (
        <div className='login'> 
        <div className="item">
            <h2>Welcome back,</h2>
            <form action="">
                <input type="text" placeholder='Email' name='email' />
                <input type="password" placeholder='Password' name='password' />
                <button>Sign In</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
            <h2>Create an Account</h2>
           <form action="">
            <label htmlFor="file">
                <img src={avatar.url || "./avatar.png" }alt="" />
                Upload an image</label>
            <input type="file" name="" id="file" style={{display:"none"}} onChange={handleAvatar}/>
            <input type="text" placeholder='Username' name='username' />
            <input type="text" placeholder='Email' name='email'/>
            <input type="password" placeholder='Password' id="" />
            <button>Sign Up</button>
            </form>
        </div>
        </div>
    )
}
export default Login