import React from "react";
import SignIn from '../../components/sign-in/signin.component';
import { SignUp } from "../../components/sign-up/sign-up.component";
import './signin-and-signup.style.scss';


const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp;