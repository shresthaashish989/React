import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Joobs from './Pages/Joobs';
import Register from './Pages/Register';
import Login from './Pages/Login';
import SingleJobPage from './Pages/SingleJobPage';
import AddJob from './Pages/AddJob';
import { Toaster } from 'react-hot-toast';
import EditJob from './Pages/EditJob';

const App = () => {
  return (
    <div>
      <Toaster/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs' element={<Joobs />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/job/:id' element={<SingleJobPage/>}/>
        <Route path='/Addjob' element={<AddJob/>}/>
        <Route path='/editjob' element={<EditJob/>}/>

      </Routes>
    </div>
  );
}

export default App;
