import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';



function App() {
  return (
    <div className="main-content">
        <>
    <BrowserRouter> 
        <NavBar />
          <Routes> 
             <Route path="/" exact component={Home}/>
          </Routes>
     </BrowserRouter>
     </>
    </div>
  );
}

export default App;
