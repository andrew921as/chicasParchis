import React from 'react'
import './Header.css'

export default function Header({tittle, color}) {
  return (
    <div style={{color: color}}>
        <h1>
            {tittle}
        </h1>
    </div>
  )
}
