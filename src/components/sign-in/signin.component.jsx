import React, { Component } from "react";
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";
import './signin.style.scss';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = event => {
        event.preventDefault(0);
        console.log(this.state,' state')
        this.setState({email: '', password: ''});
    }
 
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name="email" 
                    label="email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    />
                    {/* <label htmlFor="email">Email</label> */}
                    <FormInput 
                    type="password" 
                    name="password" 
                    label="password"
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    />
                    {/* <label htmlFor="email">Password</label> */}
                    <CustomButton type="submit"> Sign In </CustomButton> 
                </form>
            </div>
        )
    }
}