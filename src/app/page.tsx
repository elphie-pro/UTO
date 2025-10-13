"use client"
import Navbar from '../components/navbar'
import Welcome from '../components/Landing/welcome'
import Trending from '../components/Landing/trending'

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <Welcome />
      <Trending />
    </div>
  );
}
