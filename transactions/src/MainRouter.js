import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import AddTransactions from './Components/AddTransactions'
import AdminTransactions from './Components/AdminTransactions'
import Navbar from './Components/pages/Navbar'

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/transactions" element={<Navbar />} >
          <Route index element={<Dashboard />} />
          <Route path="/transactions/adminTransactions" element={<AdminTransactions />} />
          <Route path="/transactions/adminTransactions/addTransactions" element={<AddTransactions />} />
        </Route>
      </Routes>
    </>
  )
}

export default MainRouter