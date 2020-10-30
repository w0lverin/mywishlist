import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Items from './components/items/Items';
import AddItem from './components/items/AddItem';
import EditItem from './components/items/EditItem';
import Header from './components/layout/Header';
import About from './components/others/About';
import NotFound from './components/others/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {GlobalContextProvider} from "./context/global/GlobalContextProvider";
import {UserContextProvider} from "./context/user/UserContextProvider";
import UserPage from "./components/user/UserPage";
import {GlobalContext} from "./context/global/GlobalContext";

class App extends Component {
  render() {
    return (
      <GlobalContextProvider>
        <Router>
          <div className="App">
              <Header branding="Wish List 4 Santa" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Items} />
                <Route exact path="/item/add" component={AddItem} />
                <Route exact path="/item/edit/:id"
                       render={(props) =>
                           (<GlobalContext.Consumer>
                             {
                               value => {
                                 const { items } = value;
                                 return (<EditItem {...props} items={items} />);
                               }
                             }
                           </GlobalContext.Consumer>) } />
                <Route exact path="/about" component={About} />
                <Route exact path="/user"
                       render={(props) =>
                           (<UserContextProvider><UserPage {...props} /></UserContextProvider>) }/>
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </GlobalContextProvider>
    );
  }
}

export default App;
