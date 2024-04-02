import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Signin from './component/Signin';
import Signup from './component/Signup';
import Nav from './component/Nav';

function App() {
  return (
    <Router>
      <Nav/>
    
      <Routes>
       
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
