import React from "react";
import { Link } from "react-router-dom";
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { authentication } from "../../firebase/firebase.utils";
import CardIcon from '../card-icon/card-icon.component';
import { connect } from "react-redux";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser,hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {currentUser ?
                <div className="option" onClick={() => authentication.signOut()}>Sign Out</div>
                :
                <Link className="option" to="/login"> Sig In </Link>
            }
            <CardIcon className='option' />
        </div>
        { hidden ? null:  <CartDropDown />}
        
    </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);