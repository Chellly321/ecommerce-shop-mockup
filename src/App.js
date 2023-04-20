import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path="/">    
            <Header />
            <Home />
          </Route>

        <Route exact path="/checkout">
            <Header />
            <Checkout />
        </Route>
          
        </Switch>
        
      </Router>

    </div>
  );
}

export default App;
