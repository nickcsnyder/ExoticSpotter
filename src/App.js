import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import CarListPage from './routes/CarListPage';
import LoginPage from './routes/loginPage';
import Registration from './routes/registrationPage';
import Header from './header/header';
// import PrivateRoute from './Utilities/privateRoute';
import PublicRoute from './Utilities/publicRoute';

// import './App.css';

class App extends Component {
  state = { hasError: false }
  
  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error.</p>}
          <Switch>
          <Route
            exact 
            path={'/'}
            component={CarListPage} 
            />
          <PublicRoute
            path={'/login'}
            component={LoginPage} 
            />
          <PublicRoute
            path={'/registration'}
            component={Registration} 
            />
           {/* <PrivateRoute
            path={'/content'} 
            component={Content} 
            /> */}
            </Switch>
        </main>
      </div>
    )
  }
}

export default App;
