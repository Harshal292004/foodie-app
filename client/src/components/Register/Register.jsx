import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
const Register = ({ login, register}) => {
  const [formData, setFormData] = useState({});
  const [error,setError]=useState(null)
  const navigate=useNavigate(null)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isLogin = login && login.isLogin;
  const fields = isLogin ? login.fieldsList : register.fieldsList;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const url = isLogin
        ? 'http://localhost:5000/users/loginUser'
        : 'http://localhost:5000/users/createUser';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors ? JSON.stringify(errorData.errors) : `HTTP error! status: ${response.status}`);
      }
      
      const json = await response.json();

      if (json.success) {
        // Store the token in localStorage
        localStorage.setItem('userToken', json.token);
        navigate('/welcome')
      } else {
        setError(json.error || 'An error occurred');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message || 'Network error. Please try again.');
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="bg-transparent p-8 rounded-lg  w-96">
        <h2 className="text-2xl font-bold italic text-center mb-6 text-white">
          {isLogin ? 'Login' : 'Register'} to FoodieApp
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {fields.map((field) => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 px-4 rounded-md mt-6 hover:bg-orange-500 transition duration-300"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-white font-bold">
            {isLogin ? login.endingLinkLabel : register.endingLinkLabel}
            <NavLink 
            to={isLogin ? login.link : register.link} 
            className="text-orange-400 hover:text-orange-500 font-semibold text-lg "
            >
                {isLogin ? 'Register' : 'Login'}
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;