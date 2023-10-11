
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'; 
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/account/register`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export default async function loginUser(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/account/login', {
        username,
        password,
      });

    
      if (response.status === 200) {
        const token = response.data.access; 
        res.status(200).json({ token });
      } else {
      
        res.status(401).json({ error: 'Login failed' });
      }
    } catch (error) {
      
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).end(); 
  }
}

export const logoutUser = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/account/logout/`);
        return response.data;
    } catch (error) {
        throw error;
    }
};



