import { useState } from 'react';
import './app.css';
import Router from './routes';

function App() {

    useState(() => {
        localStorage.setItem('api', 'pw2');
    }, []);

    return (
        <div className='padre'>
            <Router />
        </div>
    );
}

export default App;