import React, { useEffect, useState } from 'react';

const Welcome = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/users/welcome', {
          method: 'GET',
          credentials: 'include',  // This ensures cookies (like the token) are sent
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUser(data.user);
      } catch (err) {

      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {user?(<h1>Welcome,{user.fullname}!</h1>):(<p>Loading user data...</p>)}
    </div>
  );
};

export default Welcome;
