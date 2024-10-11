import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { CgProfile } from "react-icons/cg";
import { MdMenuBook } from "react-icons/md";
import { FaConciergeBell } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { IoNotifications } from "react-icons/io5";
import { MdOutlineFastfood } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import FoodCategorySection from '../components/FoodCategorySection/FoodCategorySection';
const Welcome = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('userToken');

        if (!token) {
          navigate('/login');
          return;
        }

        const response = await fetch('http://localhost:5000/users/welcome', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        if (data.success) {
          setUser(data.user);
        } else {
          localStorage.removeItem('userToken');
          navigate('/login');
        }
      } catch (err) {
        console.error('Error fetching user data:', err);
        localStorage.removeItem('userToken');
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <>
      <div>
        <Navbar
        middleOptions={
          [
            {
              to:"/MyCart", className:"", icon:<FaConciergeBell />, title:"My Cart",isLoggedIn:true
            },
            {
              to:"/Menu",className:"",icon:<MdMenuBook/>,title:"Menu"
            },
            {
              to:"/orders",className:"",icon:<MdOutlineFastfood />,title:"My Orders",isLoggedIn:true 
            }
          ]
        }
        rightOptions={
          [
            {
              to:"/profile", className:"", icon:<CgProfile/>, title:"",isLoggedIn:true
            },
            {
              to:"/notificatins",className:"",icon:<IoNotifications />,title:"",isLoggedIn:true
            },
            {
              to:"/wishlist",className:"",icon:<FcLike />,title:"",isLoggedIn:true
            }
          ]
        }
        isLoggedIn={true}
        ></Navbar>
      </div>
      <div>
        {user ? (<h1>Welcome, {user.fullname}!</h1>) : (<p>Loading user data...</p>)}
      </div>
      <div>
        <FoodCategorySection/>
      </div>
    </>
  );
};

export default Welcome;