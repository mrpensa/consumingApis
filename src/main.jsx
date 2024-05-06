import React from 'react'
import ReactDOM from 'react-dom/client'
import { ButtonEnvironment } from './components/Button.component' 
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import {Environment} from './components/Environment.component';
import { OpDev } from './pages/op-dev';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Environment environment="op-dev" />} />
      <Route path="/op-dev" element={<OpDev />} />  
    </Routes>
  </Router>
)

{/* <ButtonEnvironment name="OP-QA"/>
<ButtonEnvironment name="OP-ATQA"/>
<ButtonEnvironment name="OP-DEV"/> */}

/* <Router>
   <Routes>
     <Route path="/op-dev" element={<OpDev />}
//    </Routes>
//  </Router> */

