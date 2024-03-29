import React from 'react';
import { useDispatch } from 'react-redux';
import Dashboard from './Pages/Dashboard';
import { connectAbi } from './Redux/Blockchain/BlockchainAction';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAllPassConfig } from './Redux/Application';
import { contractPartner } from './Utils/config';

function App() {
  const dispatch = useDispatch();
  dispatch(connectAbi(contractPartner));
  dispatch(getAllPassConfig())
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:referral" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
