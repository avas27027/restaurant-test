import React from 'react';
import ReactDOM from 'react-dom/client';

import LoginRegister from "./components/forms/LoginRegister.js";
import Landing from './components/Landing';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router =  createBrowserRouter([
  {path:"/", element:<Landing/>},
  {path:"/login", element:<LoginRegister/>}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
