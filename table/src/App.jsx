import { useState, useEffect, createContext} from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/header/Header';
import React from 'react';

export const propContext = createContext();

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users ');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result)
        //  console.log(result)

      } catch (error) {

      } finally {

      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array to run effect only once on mount
  return (
    <propContext.Provider value={{data,setData}}>
      <div className="App">
        <Header />
        <Table data={data} />
      </div>
    </propContext.Provider>
  );
}

export default App;