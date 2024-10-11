import React from 'react'
import Register from '../components/Register/Register'
import Navbar from '../components/Navbar/Navbar'

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-signup-pattern bg-cover bg-center">
        <div className='mb-5'>
            <Navbar/>
        </div>
        
        <div className="container mx-auto py-8">
            <Register 
                login={{isLogin:false}} 
                register={
                    {
                        fieldsList:[
                            {name:"username", type:"text", placeholder:"Enter a username you like.."},
                            {name:"fullname", type:"text", placeholder:"Enter your name.."},
                            {name:"email", type:"email", placeholder:"Enter your email.."},
                            {name:"contact", type:"number", placeholder:"Enter your contact number.."},
                            {name:"password", type:"password", placeholder:"Enter your password.."}, 
                            {name:"age", type:"number", placeholder:"Enter your age (15 and above only).."}
                        ],
                        endingLinkLabel:'Have an account already? ',
                        link:'/login'
                    }
                }
            >
            </Register>
        </div>
      </div>
    </div>
  )
}

export default SignUp