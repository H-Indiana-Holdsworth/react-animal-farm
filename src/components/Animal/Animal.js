import React from 'react'
import './Animal.css'

export default function Animal({ type, name, says, top, left }) {
  return (
    <div className="animal" style={{ top: top, left: left }}>
      <img src={`${process.env.PUBLIC_URL}/animals/${type}.svg`} alt={name} />
      <span className="name">{name}</span>
      <span>{says}</span>
    </div>
  )
}
