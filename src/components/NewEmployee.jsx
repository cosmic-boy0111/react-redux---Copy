import React, { useState } from 'react'
import Dialog from './Dialog'

const NewEmployee = () => {

    const [open, setOpen] = useState(false)

  return (
    <>
    <div className='search_div' style={{marginTop:'1rem'}}>
        <div className='btn' onClick={() => setOpen(true)} style={{
            backgroundColor: '#42a5f5'
        }}>Add New Employee</div>
    </div>
    {
        open && <Dialog mode={'Add'} title={'Add New Employee'} />
    }
    </>
  )
}

export default NewEmployee