import Head from "next/head";
import { useEffect, useState } from "react";
import LogoutButton from './logout';
import Cookies from 'js-cookie';

export default function Lobby() {
  const [authenticated, setAuthenticated] = useState(false);

  const checkAuthentication = () => {
    const token = Cookies.get('token'); 
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  };
  useEffect(() => {
    checkAuthentication();
  }, []);

 
  return (
    <>
      <Head>
        <title>Lobby</title>
      </Head>
      {authenticated ? (
        <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534271057238-c2c170a76672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}>
        <div >
          <div className="text-center p-8 bg-white rounded shadow-md w-96">
            <h1 className="text-2xl font-semibold mb-4">
              Welcome to the logged-in user's panel
            </h1>
            <p className="mb-4">Done by Toqa</p>
            <LogoutButton />
          </div>
        </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center p-8 bg-white rounded shadow-md w-96">
            <h1 className="text-2xl font-semibold mb-4">
              Please log in to access this page
            </h1>
           
        <a href="/login" className="bg-orange-800 text-white px-4 py-2 rounded hover:bg-orange-300 focus:outline-none focus:ring focus:border-blue-300">
    Login
  </a>
          </div>
        </div>
      )}
    </>
  );
}
