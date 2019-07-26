import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <div>
          <h2> I Already have an account</h2>
          <span>Sign in with your e-mail and password</span>
        </div>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            handleChange={this.handleChange}
            value={email}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            handleChange={this.handleChange}
            value={password}
            required
          />
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}
export default SignIn;
