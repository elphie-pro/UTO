"use client"
import Navbar from '../components/navbar'
import Welcome from '../components/Landing/welcome'

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Welcome />
    </div>
  );
}
