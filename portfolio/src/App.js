import './App.css';
import {BrowserRouter, Routes, Route} from  'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home'
import Experience from './pages/Experience';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path = "/" 
          element={<Home></Home>} />
          <Route path="/experience"
          element={<Experience></Experience>} />
          <Route path = "/projects" 
          element={<h1>Projects</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
