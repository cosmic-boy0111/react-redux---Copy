import React, { useState } from 'react'
import Dialog from './Dialog'

const NewEmployee = () => {

    const [open, setOpen] = useState(false)

    const closeDialog = () => {
      setOpen(false);
    }

    const data = {
      "id": '',
      "name": "",
      "username": "",
      "email": "",
      "address": {
        "street": "",
        "suite": "",
        "city": "",
        "zipcode": "",
        "geo": {
          "lat": "test",
          "lng": "test"
        }
      },
      "phone": "",
      "website": "",
      "company": {
        "name": "",
        "catchPhrase": "",
        "bs": ""
      }
    }

  return (
    <>
    <div className='search_div' style={{marginTop:'1rem'}}>
        <div className='btn' onClick={() => setOpen(true)} style={{
            backgroundColor: '#42a5f5'
        }}>Add New Employee</div>
    </div>
    {
        open && <Dialog mode={'Add'} title={'Add New Employee'} closeAction={closeDialog} data={data} onCancel={closeDialog} />
    }
    </>
  )
}

export default NewEmployee