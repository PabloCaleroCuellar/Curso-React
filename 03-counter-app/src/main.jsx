import React from 'react';
import ReactDOM from 'react-dom/client';

import { HelloWorldApp } from './components/HelloWorldApp'
import { FirstApp } from './components/FirstApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    //hay otros modos, pero se aconseja siempre usar el modo estricto (StrictMode)
    <React.StrictMode>
        <HelloWorldApp />
        <FirstApp />
    </React.StrictMode>
);