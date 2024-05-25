import React, { useState } from 'react'

import { X } from 'lucide-react';
import EmployeeForm from './EmployeeForm';

const Dialog = ({ mode, title, closeAction, data, onCancel }) => {

  const [employeeData, setEmployeeData] = useState(data)

  return (
    <div className='dialog'>
      <div className='form_container'>
        <div className='header'>
          <h2 >{title} </h2>
          <X onClick={closeAction} style={{ cursor: 'pointer' }} />
        </div>
        <EmployeeForm  employeeData={employeeData} setEmployeeData={setEmployeeData} onCancel={onCancel} mode={mode} />
      </div>
    </div>
  )
}

export default Dialog