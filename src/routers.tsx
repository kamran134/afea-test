import React, { FunctionComponent } from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import Home from './view/pages/Home';
import Register from './view/pages/Register';
import Login from './view/pages/Login';

const Routers: FunctionComponent<{}> = () => {
    return (
        <Routes>
            <Route path='register' element={<Register />}/>
            <Route path='login' element={<Login/>}/>
            <Route path='/' element={<Home/>} />
        </Routes>
    );
}

export default Routers;
