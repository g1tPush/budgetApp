import React from 'react'
import Header from './components/Header/Header'
import { GlobalStyle } from './shared/global'
import { Routes, Route } from 'react-router-dom'
import ExpenseFormComp from './components/ExpenseFormComp/ExpenseFormComp'
import MainPage from './components/MainPage'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={
          <MainPage />
        } />
        <Route path='/create' element={
          <ExpenseFormComp screenType='create' />
        } />
        <Route path='/edit/:id' element={
          <ExpenseFormComp screenType='edit' />
        } />
      </Routes>
    </>
  )
}

export default App
