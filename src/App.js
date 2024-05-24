import './App.css';

import { useDispatch } from 'react-redux';
import { _setEmployees } from './store/reducers/employees';
import { useEffect } from 'react';
import axios from 'axios';
import Table from './components/Table';



function App() {

  const dispatch = useDispatch();

  const getEmployees = async () => {
    try {
      
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      // console.log(response.data);
      dispatch(_setEmployees(response.data));

    } catch (error) {
      console.log("message: " + error);
    }
  }

  useEffect(() => {
    getEmployees();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Table />
      </header>
    </div>
  );
}

export default App;
