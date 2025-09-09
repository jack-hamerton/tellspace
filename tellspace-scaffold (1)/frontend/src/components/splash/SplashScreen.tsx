import React, {useEffect, useState} from 'react'

export default function SplashScreen(){
  const [show, setShow] = useState(true)
  useEffect(()=>{
    const t = setTimeout(()=> setShow(false), 900)
    return ()=> clearTimeout(t)
  },[])
  if(!show) return null
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:140}}>
      <div style={{textAlign:'center'}}>
        <div style={{fontSize:40,fontWeight:800}}>📦</div>
        <div style={{opacity:0.9,fontWeight:700}}>TellSpace</div>
        <div style={{opacity:0.6,fontSize:14}}>Create • Study • Connect</div>
      </div>
    </div>
  )
}
