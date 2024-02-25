import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { DarkModeProvider } from './DarkModeContext';
import Home from './Components/Home';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';

function App() {
  return (
    <DarkModeProvider>
    <BrowserRouter>
        <Routes>
        {/* git status
            git add .
            git commit -m "message"
            git push
         */}
        <Route exact path="/" element={<Home />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />}/>
        <Route path="/Page4" element={<Page4 />} />
    </Routes>
    </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
