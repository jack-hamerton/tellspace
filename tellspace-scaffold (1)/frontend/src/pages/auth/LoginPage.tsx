import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function LoginPage(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const nav = useNavigate()

  async function submit(e:React.FormEvent){
    e.preventDefault()
    try{
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {email,password})
      const token = res.data.access_token
      localStorage.setItem('TS_TOKEN', token)
      nav('/')
    }catch(err:any){
      setError(err?.response?.data || 'Login failed')
    }
  }

  return (
    <div className='card' style={{maxWidth:480,margin:'0 auto'}}>
      <h3>Login</h3>
      <form onSubmit={submit}>
        <label>Email</label>
        <input type='email' value={email} onChange={e=>setEmail(e.target.value)} required style={{width:'100%',padding:8,borderRadius:8,margin:'8px 0'}} />
        <label>Password</label>
        <input type='password' value={password} onChange={e=>setPassword(e.target.value)} required style={{width:'100%',padding:8,borderRadius:8,margin:'8px 0'}} />
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:12}}>
          <button type='submit' className='nav-link' style={{background:'transparent'}}>Sign in</button>
          <a href='/register' style={{color:'var(--muted)'}}>Create account</a>
        </div>
        {error && <div style={{color:'#ff6b6b',marginTop:8}}>{String(error)}</div>}
      </form>
    </div>
  )
}
