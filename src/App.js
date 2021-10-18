import {HashRouter,Route,Switch } from 'react-router-dom';
import Nav from "./components/nav"
import Seat from "./components/seat"
import Recode from "./components/recode"
import Book from "./components/book"
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Nav>
        </Nav>
      </div>
      <div className="body">
          <Switch>
            <Route exact path="/seat" component={Seat}/>
            <Route exact path="/seat/recode" component={Recode}/>
            <Route exact path="/book" component={Book}/>
          </Switch>
      </div>
    </div>
  );
}

export default App;
