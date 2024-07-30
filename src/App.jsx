import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import './App.css';
import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Routes>
        <Route path="/" element={
          <Home />
        }>
        </Route>
        <Route path="/page1" element={
          <Page1 />
        }>
        </Route>
        <Route path="/page2" element={
          <Page2 />
        }>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
