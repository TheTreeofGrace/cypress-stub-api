import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import ErrorFound from './components/error/error';

function App() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/error' element={<ErrorFound />} />
                </Routes>    
            </BrowserRouter>
      );
}

export default App;
