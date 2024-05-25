import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { _addEmployee, _updateEmployee } from '../store/reducers/employees';

const EmployeeForm = ({ employeeData, setEmployeeData, onCancel, mode }) => {

    const employees = useSelector(state => state.employees);
    const dispatch = useDispatch();

    const onBasicChange = (e) => {
        if (mode === 'View') return;
        const name = e.target.name;
        const value = e.target.value;

        setEmployeeData({ ...employeeData, [name]: value });

    }

    const onAddressChange = (e) => {
        if (mode === 'View') return;
        const name = e.target.name;
        const value = e.target.value;

        setEmployeeData({
            ...employeeData, address: {
                ...employeeData.address,
                [name]: value
            }
        });
    }

    const onCompanyChange = (e) => {
        if (mode === 'View') return;
        const name = e.target.name;
        const value = e.target.value;

        setEmployeeData({
            ...employeeData, company: {
                ...employeeData.company,
                [name]: value
            }
        });
    }

    const onClear = () => {
        setEmployeeData({
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
        })
    }

    const isNotEmpty = (value) => {
        return value !== undefined && value !== null && value !== '';
    };

    const validateObject = (obj) => {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                    if (!validateObject(obj[key])) {
                        return false;
                    }
                } else if (!isNotEmpty(obj[key])) {
                    return false;
                }
            }
        }
        return true;
    };

    const onSave = () => {
        console.log(employeeData);
        if (!validateObject(employeeData)) {
            alert('Some fields are empty')
            return;
        }
        var existingEmployeeIndex = employees.some(employee => parseInt(employee.id) === parseInt(employeeData.id));
        if (mode === "Add") {
            if (existingEmployeeIndex) {
                alert('Employee id already exists');
                return;
            }

            dispatch(_addEmployee(employeeData))
            onCancel();
            return;
        }
        if (mode === "Update") {
            if (!existingEmployeeIndex) {
                alert('Employee id does not exists');
                return;
            }

            dispatch(_updateEmployee(employeeData));
            onCancel();
        }
    }

    return (
        <>
            <form action="">
                <div className='form_first_container'>
                    <div className='left'>
                        <div className='form_div'>
                            <label htmlFor="id">ID</label>
                            <input type="text" name='id' value={employeeData.id} onChange={onBasicChange}
                                style={mode === 'View' ? {
                                    border: 'none',
                                    borderBottom: '1px solid gray',
                                    borderRadius: '0'
                                } : {}}
                                disabled={mode === 'View'}
                            />
                        </div>
                        <div className='form_div'>
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username' value={employeeData.username} onChange={onBasicChange}
                                style={mode === 'View' ? {
                                    border: 'none',
                                    borderBottom: '1px solid gray',
                                    borderRadius: '0'
                                } : {}}
                                disabled={mode === 'View'}
                            />
                        </div>
                        <div className='form_div'>
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name='phone' value={employeeData.phone} onChange={onBasicChange}
                                style={mode === 'View' ? {
                                    border: 'none',
                                    borderBottom: '1px solid gray',
                                    borderRadius: '0'
                                } : {}}
                                disabled={mode === 'View'}
                            />
                        </div>

                    </div>

                    <div className='right'>
                        <div className='form_div'>
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' value={employeeData.name} onChange={onBasicChange}
                                style={mode === 'View' ? {
                                    border: 'none',
                                    borderBottom: '1px solid gray',
                                    borderRadius: '0'
                                } : {}}
                                disabled={mode === 'View'}
                            />
                        </div>
                        <div className='form_div'>
                            <label htmlFor="email">Email</label>
                            <input type="text" name='email' value={employeeData.email} onChange={onBasicChange}
                                style={mode === 'View' ? {
                                    border: 'none',
                                    borderBottom: '1px solid gray',
                                    borderRadius: '0'
                                } : {}}
                                disabled={mode === 'View'}
                            />
                        </div>
                        <div className='form_div'>
                            <label htmlFor="website">Website</label>
                            <input type="text" name='website' value={employeeData.website} onChange={onBasicChange}
                                style={mode === 'View' ? {
                                    border: 'none',
                                    borderBottom: '1px solid gray',
                                    borderRadius: '0'
                                } : {}}
                            />
                        </div>

                    </div>


                </div>
                <h3>Address</h3>
                <div className='form_div'>
                    <label htmlFor="street">Street</label>
                    <input type="text" name='street' value={employeeData.address.street} onChange={onAddressChange}
                        style={mode === 'View' ? {
                            border: 'none',
                            borderBottom: '1px solid gray',
                            borderRadius: '0'
                        } : {}}
                        disabled={mode === 'View'}
                    />
                </div>

                <div className='form_first_container'>
                    <div className='left'>
                        <div className='form_div'>
                            <label htmlFor="suite">Suite</label>
                            <input type="text" name='suite' value={employeeData.address.suite} onChange={onAddressChange}
                                style={mode === 'View' ? {
                                    border: 'none',
                                    borderBottom: '1px solid gray',
                                    borderRadius: '0'
                                } : {}}
                                disabled={mode === 'View'}
                            />
                        </div>
                    </div>
                    <div className='right'>
                        <div className='form_div'>
                            <label htmlFor="city">City</label>
                            <input type="text" name='city' value={employeeData.address.city} onChange={onAddressChange}
                                style={mode === 'View' ? {
                                    border: 'none',
                                    borderBottom: '1px solid gray',
                                    borderRadius: '0'
                                } : {}}
                                disabled={mode === 'View'}
                            />
                        </div>
                    </div>

                </div>
                <div className='form_div'>
                    <label htmlFor="zipcode">Zipcode</label>
                    <input type="text" name='zipcode' value={employeeData.address.zipcode} onChange={onAddressChange}
                        style={mode === 'View' ? {
                            border: 'none',
                            borderBottom: '1px solid gray',
                            borderRadius: '0'
                        } : {}}
                        disabled={mode === 'View'}
                    />
                </div>
                <h3>Company</h3>

                <div className='form_first_container'>
                    <div className='left'>
                        <div className='form_div'>
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' value={employeeData.company.name} onChange={onCompanyChange}
                                style={mode === 'View' ? {
                                    border: 'none',
                                    borderBottom: '1px solid gray',
                                    borderRadius: '0'
                                } : {}}
                                disabled={mode === 'View'}
                            />
                        </div>
                    </div>
                    <div className='right'>
                        <div className='form_div'>
                            <label htmlFor="bs">Bs</label>
                            <input type="text" name='bs' value={employeeData.company.bs} onChange={onCompanyChange}
                                style={mode === 'View' ? {
                                    border: 'none',
                                    borderBottom: '1px solid gray',
                                    borderRadius: '0'
                                } : {}}
                                disabled={mode === 'View'}
                            />
                        </div>
                    </div>

                </div>
                <div className='form_div'>
                    <label htmlFor="catchPhrase">Catch Phrase</label>
                    <input type="text" name='catchPhrase' value={employeeData.company.catchPhrase} onChange={onCompanyChange}
                        style={mode === 'View' ? {
                            border: 'none',
                            borderBottom: '1px solid gray',
                            borderRadius: '0'
                        } : {}}
                        disabled={mode === 'View'}
                    />
                </div>
            </form>
            {
                mode !== 'View' &&
                <div className='form_action'>
                    <button className='btn' onClick={onSave}
                        style={{
                            backgroundColor: '#81c784',
                            marginRight: '1rem'
                        }}>
                        Save
                    </button>
                    <button className='btn' onClick={onClear} style={{
                        backgroundColor: '#42a5f5',
                        marginRight: '1rem'
                    }}>
                        Clear
                    </button>
                    <button className='btn' onClick={onCancel}
                        style={{
                            backgroundColor: '#ef5350'
                        }}>
                        Cancel
                    </button>
                </div>
            }
        </>
    )
}

export default EmployeeForm