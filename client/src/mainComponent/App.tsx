import React, {useEffect, useState} from 'react';
import './App.css';
import { useAppSelector } from '../hooks/redax';
import { CardTask } from '../components/card';
import DenseTable from "../components/table";

function App() {

  const { task, error } = useAppSelector(state => state.useReducer)
    console.log({task})
  return (
    <div className="App">
        <CardTask />
        <DenseTable />
    </div>
  );
}

export default App;
