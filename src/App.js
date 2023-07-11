import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Template from './component/template/Template';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About /> }/>
          <Route path="/portfolio" element={<Portfolio /> }/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
