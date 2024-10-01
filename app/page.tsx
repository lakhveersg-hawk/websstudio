import Head from 'next/head';
import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';
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
