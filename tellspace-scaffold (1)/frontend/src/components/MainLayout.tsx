import React from 'react'
import { Link } from 'react-router-dom'
import SplashScreen from './splash/SplashScreen'

export default function MainLayout({children}:{children:React.ReactNode}){
  return (
    <div className='app-shell'>
      <header className='header'>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:44,height:44,background:'#0b1220',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>TS</div>
          <div style={{fontWeight:700}}>TellSpace</div>
        </div>
        <nav className='nav-items'>
          <Link className='nav-link' to='/'>Home</Link>
          <Link className='nav-link' to='/'>Discover</Link>
          <Link className='nav-link' to='/study'>Study</Link>
          <Link className='nav-link' to='/messages'>Messages</Link>
        </nav>
        <div style={{display:'flex',gap:8}}>
          <Link to='/login' className='nav-link'>Login</Link>
        </div>
      </header>

      <SplashScreen />

      <main className='container'>
        {children}
      </main>

      <div className='screenshot-blocker' aria-hidden />
    </div>
  )
}
