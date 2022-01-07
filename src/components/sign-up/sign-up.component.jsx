import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => { 
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = event => {
        event.preventDefault(0);
    }

    render() {
        return (
            <div className="signup">
                <h2 className="title">I do not have an account</h2>
                <span>Sing up with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="text" 
                    name="displayName" 
                    label="Display Name"
                    value={this.state.displayName}
                    handleChange={this.handleChange}
                    />
                    <FormInput 
                    type="email" 
                    name="email" 
                    label="Email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    />
                    <FormInput 
                    type="password" 
                    name="password" 
                    label="Password"
                    value={this.state.password}
                    handleChange={this.handleChange}
                    />
                     <FormInput 
                    type="password" 
                    name="confirmPassword" 
                    label="Confirm Password"
                    value={this.state.confirmPassword}
                    handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign Up </CustomButton> 
                        <CustomButton isGoogleButton={true} onClick={signInWithGoogle}> Sign Up With Google </CustomButton> 
                    </div>
                </form>
            </div>
        )
    }
}