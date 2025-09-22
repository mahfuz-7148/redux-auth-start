import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx';
import {BrowserRouter} from 'react-router';
import {configureStore} from '@reduxjs/toolkit';
import auth from './store/reducers/auth.js';
import {Provider} from 'react-redux';

const store = configureStore({
  auth
})

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
   <Provider store={store}>
      <App />
   </Provider>
 </BrowserRouter>

)
