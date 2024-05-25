import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import {Environment} from './components/Environment.component';
import { OpDev } from './pages/op-dev';
import { OpQa } from './pages/op-qa';
import { OpAtQa } from './pages/op-atqa';

const root = ReactDOM.createRoot(document.getElementById('root'));
const optionsMS = [
  {name:"Push Notification", url:"https://jsonplaceholder.typicode.com/posts"},
  {name:"Email Notification", url:"https://jsonplaceholder.typicode.com/posts"},
  {name:"Otro Notification", url:"https://jsonplaceholder.typicode.com/posts"}
];
const envs = ["op-dev", "op-qa", "op-atqa"];

root.render(
<Router>
    <Routes>
      <Route path="/op-dev" element={<OpDev options={optionsMS}/>} />
      <Route path="/op-qa" element={<OpQa />} />
      <Route path="/op-atqa" element={<OpAtQa />} />
      <Route path="/" element={<Environment paths={envs}/>} />
    </Routes>
  </Router>
);
