import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />}/>
        <Route path="/Page4" element={<Page4 />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
