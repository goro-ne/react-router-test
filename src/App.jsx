import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './Home';
import { Page1 } from './Page1';
import { Page1DetailA } from "./Page1DetailA";
import { Page2 } from './Page2';
import { Page1DetailB } from "./Page1DetailB";
import { Page404 } from "./Page404";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page1/detailA" element={<Page1DetailA />} />
        <Route path="/page1/detailB" element={<Page1DetailB />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
