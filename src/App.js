
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'


import Home from "./component/Home"

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  
  <Route path='/' element={<Home/>}></Route>
  
  
</Routes>
</BrowserRouter>

</>
  );
}

export default App;
