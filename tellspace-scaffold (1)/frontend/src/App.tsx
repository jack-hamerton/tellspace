import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import FeedView from './pages/FeedView'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import MessagesPage from './pages/MessagesPage'
import StudyView from './pages/StudyView'
import AdminPanel from './pages/AdminPanel'

export default function App(){
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<FeedView />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/messages' element={<MessagesPage />} />
        <Route path='/study' element={<StudyView />} />
        <Route path='/admin' element={<AdminPanel />} />
      </Routes>
    </MainLayout>
  )
}
