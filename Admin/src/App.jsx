import React from 'react';
import Navbar from './component/Navbar/Navbar';
// import Admin from './pages/Admin/admin'
import Admin from './pages/Admin/admin'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <Admin/>
    </div>
  )
}

export default App
