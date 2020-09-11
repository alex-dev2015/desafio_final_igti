import React, { useEffect, useState } from 'react';
import axios from 'axios';

const api = axios.create({ baseURL: 'api' })

export default function App() {

  const [ transactions, setTransactions ] = useState([])

  useEffect(() => {
    const fetchTransactions = async () =>{
      const { data } = await api.get('/transaction?period=2019-07');
      
      setTransactions(data.transactions);
    }

    fetchTransactions();
  }, [])

  return (
      <div className='container'>
        <h2 className='center'>Desafio Final do Bootcamp Full Stack</h2>

        {
          transactions.map(item => {
            return <p key={item}>{item}</p>
          })
        }

      </div>
    
    );
}
