import React from 'react'
import './index.css'
import { createPortal } from 'react-dom'

export default function Modal({children, danger = false, setShowModadl}) {
  let className = danger ? "border-red" : "border-blue";
  return (
    createPortal(
      <div className='modal-component'>
        <div className='modal-backdrop'>
          <div className={`modal ${className}`}>
            {children}
            <button onClick={() => setShowModadl(false)}>Close</button>
          </div>
        </div>
      </div>,
      document.getElementById("modal"))
  );
}
