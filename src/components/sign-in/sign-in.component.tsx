import { Component, FormEvent } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';

interface IProp {

}

interface IState {
    email: string;
    password: string;
}

class SignIn extends Component<IProp, IState> {

    constructor(props: IProp) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event: FormEvent<Element>) => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = (event: FormEvent<Element>) => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required />                    
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required />                    

                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}

export default SignIn;