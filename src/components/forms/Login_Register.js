import React from 'react'
import LogIn from "./LogIn";
import Register from "./Register";


function Login_Register() {
    return (
        <div className='login_Register background'>
            <div className='login_Register box border rounded p-2 d-flex'>
                <div className='col-5 border-end p-1'>
                    <LogIn />
                </div>
                <div className='col-7 p-1'>
                    <Register />
                </div>
            </div>
        </div>
    )
}

export default Login_Register