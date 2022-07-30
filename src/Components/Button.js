import React from 'react';
import './Button.css'

export const Button = ({title,className}) => {
  return (
    <div >
      <button className={`action_button ${className}`}>{title}</button>
    </div>
  )
}
