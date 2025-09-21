import React from 'react'
import {Route, Routes} from 'react-router';
import {Home} from './home.jsx';
import Login from './login.jsx';
import Register from './register.jsx';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}
