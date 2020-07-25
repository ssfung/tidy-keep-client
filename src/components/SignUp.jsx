import React from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

class SignUp extends React.Component {
  state = { email: "", password: "" };

  onInputChange = (event) => {
    const key = event.target.id;
    this.setState({
      [key]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { first_name, last_name, phone, email, password } = this.state;
    try {
      const response = await fetch("http://localhost:3000/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: { first_name, last_name, phone, email, password },
        }),
      });
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ auth: { email, password } }),
        });
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        this.props.history.push("/secrets");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    const { first_name, last_name, phone, email, password } = this.state;
    return (
      <div className="form-container">
        <h1>Sign Up</h1>

        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>First Name</label>
            <input
              // type="first_name"
              // name="first_name"
              // id="first_name"
              // value={first_name}
              onChange={this.onInputChange}
            />
        </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              // type="last_name"
              // name="last_name"
              // id="last_name"
              // value={last_name}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Phone</label>
            <input
              // type="phone"
              // name="phone"
              // id="phone"
              // value={phone}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Button className ="form-button" input type="submit">
            Submit
          </Form.Button>
        </Form>
        <p>
          <Link to="/Login" data-testid="login">
            Already have an account?
          </Link>
        </p>
      </div>
    );
  }
}

export default SignUp;
