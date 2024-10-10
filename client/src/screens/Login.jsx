import React from 'react'
import Register from '../components/Register/Register'
import Navbar from '../components/Navbar/Navbar'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <div className="flex-grow bg-login-pattern bg-cover bg-center">
        <div className='mb-5'>
        <Navbar/>
        </div>
        <div className="container mx-auto py-8">
            <Register 
            login={
                {
                    isLogin:true,
                    fieldsList:[{
                        name:"email",
                        type:"email",
                        placeholder:"Enter your login email..",
                    },
                    {
                        name:"password",
                        type:"password",
                        placeholder:"Enter your password..",
                    }],
                    endingLinkLabel:"Don't have an account ?",
                    link:'/register'
                }
            } 
            onSubmit={()=>{}}
            />
        </div>
      </div>
    </div>
  )
}

export default Login