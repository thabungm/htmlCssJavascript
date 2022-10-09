import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Reverse from './reverse-string';
import ParentComponent from './message-passing/ParentComponent';
import LifeCycleDemo from './lifecyle';
import FunctionalComponent from './functional-component';
import ProductList from './display-list';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <Reverse /> */}
    {/* <ParentComponent /> */}
    {/* <LifeCycleDemo /> */}
    {/* <FunctionalComponent /> */}
    <ProductList />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
