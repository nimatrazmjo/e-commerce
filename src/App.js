import './App.css';

import HomePage from './pages/homepage/homepage.component';

import { Routes, Route, Navigate } from 'react-router-dom'
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.component';
import { Component } from 'react';
import { authentication, createUserProfile } from './firebase/firebase.utils';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import Checkout from './pages/checkout/checkout.component';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = authentication.onAuthStateChanged(async user => {
      const userRef = await createUserProfile(user);
      this.props.setCurrentUser(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth = null;
  }

  render() {

    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route path='/login' exact element={this.props.currentUser ? (<Navigate to="/" />) : (<SignInAndSignUp />)} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
