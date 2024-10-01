import Head from 'next/head';
import Header from '../components/Header/header.jsx';
import Footer from '../components/Footer/footer.jsx';
import HomePage from '../pages/home.jsx';
export default function Home() {
  return (
    <>
      <Header/>
      <HomePage/>
      <Footer />
    </>
  );
}
