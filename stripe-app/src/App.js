import './App.css';
import { Route, Routes } from 'react-router-dom';
import Complete from './components/complete';
import Canceled from './components/cancel';
import Home from './components/home';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/cancel" element={<Canceled />} />
        <Route path="/complete" element={<Complete />} />
        <Route component={<About />} />
      </Routes>
    </main>
  );
}

function About() {
  return (
    <div>
      Check Route
    </div>
  );
}
export default App;
