import { useState } from 'react';
import { registerUser } from './api';
import { useRouter } from 'next/router';


function Register() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

const [errorMessage, setErrorMessage] = useState('');
const router = useRouter(); 
const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
      
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(userData);
      console.log('Registration successful:', response);
      router.push('/login');

    } catch (error) {
      console.error('Registration failed:', error.response.data.error);
      setErrorMessage(error.response.data.error);


    }
  };

  return (
    <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534271057238-c2c170a76672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}>
      <div className="text-black min-h-screen flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white border-pink-300 rounded-lg p-6 shadow-md w-96 border">
      <h1 className="text-2xl font-semibold mb-4 text-orange-800">Register</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-pink-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-pink-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-pink-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password2" className="block">Confirm Password:</label>
          <input
            type="password"
            id="password2"
            name="password2"
            value={userData.password2}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-pink-500"
          />
        </div>
        <div className="text-center mt-4">
  <button
    type="submit"
    className="bg-orange-800 text-white rounded-md py-2 px-4 hover:bg-orange-300 focus:outline-none focus:ring focus:border-pink-300"
  >
    Register
  </button>
  <a href="/forgot_password" className="orange-pink-500 hover:underline mt-2 block">
    Forgot Password?
  </a>
  <a href="/login" className="orange-pink-500 hover:underline mt-2 block">
    Already you registered?
  </a>
</div>
{errorMessage && (
  <p className="text-red-500 text-center mt-4">
    {errorMessage}
  </p>
)}

      </form>
    </div>
 </div>
  );
}

export default Register;
