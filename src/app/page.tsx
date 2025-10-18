"use client"
import Navbar from '../components/navbar'
import Welcome from '../components/Landing/welcome'
import Trending from '../components/Landing/trending'
import Rice from '../components/Landing/rice'
import Footer from '../components/Landing/footer'

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <Welcome />
      <Trending />
      <Rice />
      <Footer />
    </div>
  );
}
