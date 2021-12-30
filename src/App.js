import './App.css';

import HomePage from './pages/homepage/homepage.component';

import { Routes, Route } from 'react-router-dom'
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.component';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/login' element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
