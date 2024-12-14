import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import "./makeAccount.css";
import "./Team.css";
import "./BookRoom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
    <Router>
    <App />
    </Router>
    </div>
);


