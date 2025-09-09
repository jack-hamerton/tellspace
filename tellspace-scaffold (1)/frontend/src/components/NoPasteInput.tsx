import React from 'react'

export default function NoPasteInput(props: React.InputHTMLAttributes<HTMLInputElement>){
  return <input {...props} onPaste={(e)=>e.preventDefault()} />
}
