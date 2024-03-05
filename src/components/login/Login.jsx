import React, { useState } from 'react'
import { FaLock, FaUser } from 'react-icons/fa';
import './login.css'
import {useHistory} from 'react-router-dom';

function Login(props) {
    const {user,setUser,pwd,setPwd} = props;
   
    const [validUser,setValidUser] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user === 'admin' && pwd === 'password'){
            setValidUser(true);
            alert('login success');
            history.push('/fileupload')
        }else{
            alert('login failed')
        }
    }
    const resetPassword = () => {
        alert('check your email for password reset')
    }
        
    return (
        <div>
        <div className="welcome-msg">
        <p > Peterboro Matboard Inc</p>
        </div>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>login</h1>
                    <div className="input-box">
                        <input type="text" name="" id="" placeholder='username' onChange={(e) => setUser(e.target.value)} />
                        <FaUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" name="'" id="" placeholder='password' onChange={(e) => setPwd(e.target.value)} />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember">
                        <label><input type="checkbox" name="" id="" />Remember me</label>
                        <a onClick={resetPassword}>Forgot password</a>

                    </div>
                    <button type="submit">login</button>
                </form>
            </div>
        </div>
    )
}


export default Login