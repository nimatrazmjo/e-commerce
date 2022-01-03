import './App.css';

import HomePage from './pages/homepage/homepage.component';

import { Routes, Route } from 'react-router-dom'
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.component';
import { Component } from 'react';
import { authentication } from './firebase/firebase.utils';

class App extends Component {

  unsubscribeFromAuth = null;
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = authentication.onAuthStateChanged(user => {
      this.setState({currentUser:  user});
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth = null;
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/login' element={<SignInAndSignUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;
