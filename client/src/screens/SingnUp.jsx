import React from 'react'
import Register from '../components/Register/Register'
import Navbar from '../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate=useNavigate(null)
  
  const handleSuccessfulRegistration = (userToken) => {
    console.log('Registration Successful:', userToken);
    
    // Assume the server returns a token
    const token = userToken;
  
    // Store the token securely
    document.cookie = `token=${token}; SameSite=Strict; Secure`;
  
    // Redirect to the welcome page
    navigate('/welcome');
    
  }
  




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
                onSubmit={handleSuccessfulRegistration}
            >
            </Register>
        </div>
      </div>
    </div>
  )
}

export default SignUp