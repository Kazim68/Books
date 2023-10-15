import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import CreateBook from './components/create'
import EditBook from './components/EditBook'
import DeleteBook from './components/deleteBook'
import ShowBook from './components/showBook'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/books/details/:id' element={<ShowBook/> } />
        <Route path='/books/edit/:id' element={ <EditBook/>} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook/>} />
        </Routes>
    </Router>
  )
}

export default App