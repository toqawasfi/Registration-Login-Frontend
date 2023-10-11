import { useRouter } from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const token = Cookies.get('token'); 
      console.log('Token:', token);
  
      if (token) {
        await axios.post('http://127.0.0.1:8000/api/v1/account/logout', {}, {
          headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json',
          },
        });
      }
  
      Cookies.remove('token'); 
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  
  return (
    <button
  onClick={handleLogout}
  className="bg-orange-800 hover:bg-orange-400 text-white font-semibold py-2 px-4 rounded shadow"
>
  Logout
</button>

  );
};

export default LogoutButton;
