import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function FeedView(){
  const [posts,setPosts] = useState<any[]>([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    async function load(){
      setLoading(true)
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/posts`)
      setPosts(res.data)
      setLoading(false)
    }
    load()
  },[])

  return (
    <div>
      <h2>Feed</h2>
      {loading ? <div className='card'>Loading...</div> : (
        <div style={{display:'grid',gap:12}}>
          {posts.map(p=>(
            <article key={p.id} className='card'>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{fontWeight:700}}>{p.author}</div>
                <div style={{fontSize:12,color:'var(--muted)'}}>{new Date(p.created_at*1000).toLocaleString()}</div>
              </div>
              <p style={{marginTop:8}}>{p.caption}</p>
              {p.is_challenge && <div style={{marginTop:8,padding:8,background:'rgba(255,255,255,0.02)',borderRadius:8}}>Challenge • Audio: {p.audio_tag}</div>}
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
