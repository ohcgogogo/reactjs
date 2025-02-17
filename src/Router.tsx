import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/help/About';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/help/about" element={<About />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;