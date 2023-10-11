import Head from "next/head"

export default function Home() {
  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534271057238-c2c170a76672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}>
      <Head>
        <title>Home</title>
      </Head>
      <div className="bg-white p-8 rounded shadow-md w-96 text-center text-gray-800">
        <h1 className="text-2xl font-semibold mb-4 bg-orange-300">Welcome To My User System</h1>
       
        <a href="/register" className="bg-orange-800 text-white px-4 py-2 rounded hover:bg-orange-300 focus:outline-none focus:ring focus:border-blue-300">
    Register
  </a>
      </div>
    </div>
  );
};

