import { useState } from 'react';
import { useRouter } from 'next/router';  

const PasswordReset = () => {
  const router = useRouter(); 
  const { code } = router.query;
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    new_password: '',
  });

  const [message, setMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/v1/account/password_reset/${code}`, {
        method: 'POST',
        headers: {
          
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534271057238-c2c170a76672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}>

      <h1 className="text-2xl font-semibold mb-4">Password Reset</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-md w-96">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-pink-500"

          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-pink-500"

          />
        </div>
        <div className="mb-4">
          <label htmlFor="pass_code" className="block text-gray-700">pass_code:</label>
          <input
            type="text"
            id="pass_code"
            name="pass_code"
            value={formData.pass_code}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-pink-500"

          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="new_password" className="block text-gray-700">New Password:</label>
          <input
            type="password"
            id="new_password"
            name="new_password"
            value={formData.new_password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-pink-500"

          />
        </div>
        <button type="submit" className="bg-orange-800 text-white rounded-md py-2 px-4 hover:bg-orange-300">
          Reset Password
        </button>
      </form>
      {message && <p className="mt-4 text-blue-600">{message}</p>}
    </div>
  );
};

export default PasswordReset;
