import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      {user ? (<h1>Welcome, {user.fullname}!</h1>) : (<p>Loading user data...</p>)}
    </div>
  );
};

export default Welcome;