import React from 'react';
import { useDispatch } from 'react-redux';
import Dashboard from './Pages/Dashboard';
import { connectAbi } from './Redux/Blockchain/BlockchainAction';

function App() {
  const dispatch = useDispatch();
  dispatch(connectAbi());
  return (
    <Dashboard/>
  );
}

export default App;
