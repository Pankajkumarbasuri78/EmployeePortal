import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import EmployeesList from './components/EmployeesList'
import './App.css'
import AddEmployee from './components/AddEmployee'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<EmployeesList />}/>
      <Route path='*' element={<NotFound />}/>
      <Route path='/add' element={<AddEmployee />} />
      <Route path='/employees/edit/:id' element={<AddEmployee />}/>
    </Routes>
  )
}

export default App
