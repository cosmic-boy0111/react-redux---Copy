import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import '../styles/table.css'
import { ArrowDownUp } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { _deleteEmployee } from '../store/reducers/employees';
import NewEmployee from './NewEmployee';

const Table = () => {

    const dispatch = useDispatch();

    const employees = useSelector(state => state.employees);
    const [data, setData] = useState([])

    useEffect(() => {
        console.log(employees);
        setData(employees)
    }, [employees])

    const searchEmployee = (text) => {
        const filteredData = employees.filter((employee) =>
            employee.name.toLowerCase().includes(text.toLowerCase())
        );

        setData(filteredData);
    }

    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });

    const requestSort = (key) => {
        console.log('under request sort');
        let direction = 'ascending';
        if (sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
        sortTable(key, direction);
    };

    const sortTable = (key, direction) => {
        console.log('under sort table', sortConfig);
        const sortedData = [...data].sort((a, b) => {
            if (key === 'id') {
                return sortById(a, b, direction);
            } else if (key === 'name') {
                return sortByName(a, b, direction);
            }
        });

        setData(sortedData)

    }

    const sortById = (a, b, direction) => {
        if (direction === 'ascending') {
            return a.id - b.id;
        } else {
            return b.id - a.id;
        }
    };

    const sortByName = (a, b, direction) => {
        if (direction === 'ascending') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    };


    return (
        <>
            <div className='search_div'>
                <input type="text" placeholder='Search employee...' onChange={(e) => searchEmployee(e.target.value)} />
            </div>
            <table>
                <tr style={{ cursor: 'pointer' }}>
                    <th onClick={() => requestSort('id')} >ID <ArrowDownUp size={'12px'} /></th>
                    <th onClick={() => requestSort('name')} >Name <ArrowDownUp size={'12px'} /></th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                {
                    data.map((employee) => {
                        return <tr>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn' 
                                style={{
                                    backgroundColor: '#81c784'
                                }}>
                                    View
                                </button>
                            </td>
                            <td>
                                <button className='btn' style={{
                                    backgroundColor: '#42a5f5'
                                }}>
                                    Update
                                </button>
                            </td>
                            <td
                            >
                                <button className='btn' 
                                onClick={()=> dispatch(_deleteEmployee(employee.id))}
                                style={{
                                    backgroundColor: '#ef5350'
                                }}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    })
                }


            </table>
            <NewEmployee />
        </>

    )
}

export default Table