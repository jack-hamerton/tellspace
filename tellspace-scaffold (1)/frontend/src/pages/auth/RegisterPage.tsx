import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function RegisterPage(){
  const [first,setFirst]=useState('')
  const [last,setLast]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const nav = useNavigate()

  async function submit(e:React.FormEvent){
    e.preventDefault()
    try{
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, {first_name:first,last_name:last,email,password})
      nav('/login')
    }catch(err:any){
      alert(err?.response?.data || 'Register failed')
    }
  }

  return (
    <div className='card' style={{maxWidth:520,margin:'0 auto'}}>
      <h3>Create account</h3>
      <form onSubmit={submit}>
        <div style={{display:'flex',gap:8}}>
          <input placeholder='First name' value={first} onChange={e=>setFirst(e.target.value)} required style={{flex:1,padding:8,borderRadius:8}}/>
          <input placeholder='Last name' value={last} onChange={e=>setLast(e.target.value)} required style={{flex:1,padding:8,borderRadius:8}}/>
        </div>
        <input placeholder='Email' type='email' value={email} onChange={e=>setEmail(e.target.value)} required style={{width:'100%',padding:8,borderRadius:8,marginTop:8}} />
        <input placeholder='Password' type='password' value={password} onChange={e=>setPassword(e.target.value)} required style={{width:'100%',padding:8,borderRadius:8,marginTop:8}} />
        <div style={{display:'flex',justifyContent:'flex-end',marginTop:12}}>
          <button className='nav-link' type='submit'>Create</button>
        </div>
      </form>
    </div>
  )
}
