import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

export default function Home() {
  return (<>
    <Header />
    <Blog />
    <Footer />
  </>
  )
}
