import React from 'react'
import axios from 'axios'

export default function StudyView(){
  async function pay(){
    const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/payments/paypal/create`, {purpose:'study', amount:10})
    window.location.href = res.data.approval_url
  }
  return (
    <div>
      <h2>Study</h2>
      <div className='card'>
        <p>Consent-first onboarding and questionnaire builder scaffolds live here.</p>
        <button className='nav-link' onClick={pay}>Pay $10 via PayPal (placeholder)</button>
      </div>
    </div>
  )
}
