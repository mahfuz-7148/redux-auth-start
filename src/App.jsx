import React, {Fragment, useEffect} from 'react'
import {Link, Route, Routes} from 'react-router';
import {Home} from './home.jsx';
import Login from './login.jsx';
import Register from './register.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentUser, logout} from './store/reducers/auth.js';

export const App = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch]);

  return (
    <div>
      <Link to='/'>Home</Link>
      {
        auth.currentUser === null && (
          <Fragment>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </Fragment>

        )
      }
      {
        auth.currentUser && (
          <span onClick={() => dispatch(logout())}>Logout</span>
        )
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}
