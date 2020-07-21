import React from "react";

class CreateAddress extends React.Component {
  state = {
    street_address: "",
    post_code: "",
    // suburb: "",
    state: "VIC",
    user_id: 1
  };

  onInputChange = (event) => {
    console.log(this.state);
    console.log(event.target.id);
    console.log(event.target.value);
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleChange = (event) => {
      console.log('here');
      console.log(this.state);
      console.dir(event.target.value );
    this.setState({
      state: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();

    await fetch("http://localhost:3000/addresses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address: this.state }),
    });
    this.props.history.push("/addresses");
  };

  // {address: this.state.address, post_code: this.state.post_code, state: this.state.value}

  render() {
    return (
      <div className="container">
        <h1>Add a address</h1>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="name">Street Address</label>
          <input
            type="text"
            name="street_address"
            id="street_address"
            onChange={this.onInputChange}
          />

          <label htmlFor="post_code">Post code</label>
          <textarea
            name="post_code"
            id="post_code"
            onChange={this.onInputChange}
          ></textarea>


          <label htmlFor="state"> State</label>
          <select defaultValue={this.state.value} onChange={this.handleChange}>
            <option value="VIC">VIC</option>
            <option value="TAS">Tasmania</option>
            <option value="NSW">NSW</option>
            <option value="ACT">ACT</option>
            <option value="WA">WA</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateAddress;
