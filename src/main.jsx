import React from 'react'
import {createRoot} from 'react-dom/client'
import Router from './applications/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Router/>);