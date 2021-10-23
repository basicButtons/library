import {HashRouter,Route,Switch } from 'react-router-dom';
import Nav from "./components/nav"
import Seat from "./components/seat"
import Recode from "./components/recode"
import Book from "./components/book"
import Room from "./components/room"
import BookWish from "./components/bookwish"
import Login from "./components/login"
import classNames from 'classnames';
import { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  let [hidden,setHidden] = useState(false)
  return (
    <div className="App">
      <div className={classNames({"login":true,
        hidden:hidden
      })}>
        <div className="login-box">
          <Login></Login>
        </div>
      </div>
      <div className="header">
        <Nav>
        </Nav>
      </div>
      <div className="body">
          <Switch>
            <Route exact path="/seat" component={Seat}/>
            <Route exact path="/room" component={Room}/>
            <Route exact path="/seat/recode" component={Recode}/>
            <Route exact path="/book" component={Book}/>
            <Route exact path="/book/wish" component={BookWish}/>
          </Switch>
      </div>
    </div>
  );
}

export default App;
