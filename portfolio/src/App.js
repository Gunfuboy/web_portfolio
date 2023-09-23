import './App.css';
import {BrowserRouter, Routes, Route} from  'react-router-dom';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path = "/" 
          element={<h1>Home</h1>}/>
          <Route path="/experience"
          element={<h1>Experience</h1>}/>
          <Route path = "/projects" 
          element={<h1>Projects</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
