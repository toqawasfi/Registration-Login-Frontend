import '../styles/globals.css'; // Import your global CSS file

function MyApp({ Component, pageProps }) {
  return (
    <div >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
