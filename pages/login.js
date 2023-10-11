import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter(); 

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/account/login', { username, password });
      if (response.status === 200) {
        const token = response.data.token;
        Cookies.set('token', token, { expires: 7 }); 
        console.log('Login successful:', token);
        router.push('/lobby');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login failed:', error.response.data.non_field_errors);
      setErrorMessage(error.response.data.non_field_errors);
    }
  };
  

  return (
    
    <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534271057238-c2c170a76672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}>
  <div className="bg-white p-8 rounded shadow-md w-96">
    <h1 className="text-2xl font-semibold mb-4 text-orange-800">Login</h1>
    <div className="mb-4">
      <label className="block text-gray-600">Username:</label>
      <input
        type="text"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-pink-500"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-600">Password:</label>
      <input
        type="password"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-pink-500"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <button
      className="bg-orange-800 text-white px-4 py-2 rounded hover:bg-orange-300 focus:outline-none focus:ring focus:border-blue-300"
      onClick={handleLogin}
    >
      Login
    </button>
    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
  </div>
</div>

  
    
  );
};

export default Login;
