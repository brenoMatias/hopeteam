import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Galery from './components/Galery'



function App() {
  return (
    <>
    <BrowserRouter> 
        <NavBar />
          <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/galeria" component={Galery}/>
          </Switch>
         
     </BrowserRouter>
     </>
  );
}

export default App;
