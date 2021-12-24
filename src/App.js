import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';



function App() {
  return (
    <>
    <BrowserRouter> 
        <NavBar />
          <Switch>
             <Route path="/" exact component={Home}/>
          </Switch>
     </BrowserRouter>
     </>
  );
}

export default App;
