import React, { Component } from "react";
import axios from "axios";
import "./style.css";

export default class RegisterPro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      servicePro_firstName: "",
      servicePro_lastname: "",
      servicePro_email: "",
      servicePro_userPassword: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleInputChange(event) {
    const formType = event.target.id;
    this.setState({
      [formType]: event.target.value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const {
      servicePro_firstName,
      servicePro_lastName

    } = this.state;
    const formData = {
      "servicePro_firstName": servicePro_firstName,
      "servicePro_lastName": servicePro_lastName
    };


    console.log("****",formData);

    axios.post("/api/registerpros", formData).then((res) => {
      console.log("***********",res.data);
      if (res.data.success) {
        this.setState({
          success: true,
        });
      }
    });
  }

  renderSuccessMessage() {
    let result = null;
    if (this.state.success) {
      result = (
        <div className="success-message">
          Your application submission was a success!
        </div>
      );
    }

    return result;
  }

  disableForm() {
    let result = false;
    if (this.state.success) {
      result = true;
    }
    return result;
  }

  render() {
    return (
      <form className="loan-form" onSubmit={this.handleFormSubmit}>
        <fieldset
          className="form-fields container"
          disabled={this.disableForm()}
        >
          <ul className="form-container col-lg-6">
            <li className="form-list-item">
              <label htmlFor="servicePro_firstName">FIRST NAME</label>
              <input
                type="text"
                id="servicePro_firstName"
                name="servicePro_firstName"
                placeholder="First Name"
                onChange={this.handleInputChange}
              />
            </li>
            <li className="form-list-item">
              <label htmlFor="servicePro_lastName">LAST NAME</label>
              <input
                type="text"
                id="servicePro_lastName"
                name="lservicePro_lastName"
                placeholder="Last Name"
                onChange={this.handleInputChange}
              />
            </li>
            <li className="form-list-item">
              <input
                className="form-submit-btn"
                type="submit"
                value="Submit"
              />
              {this.renderSuccessMessage()}
            </li>
          </ul>
        </fieldset>
      </form>

    )
  }
}


// render() {
//     return (
//         <div className="serviceProInfo">
//         <label> First Name:</label>
//         <input type="text"/>
//         <label> Last Name:</label>
//         <input type="text"/>
//         <label> Company Name:</label>
//         <input type="text"/>
//         <label>Category:</label>
//         <input type="text"/>
//         <label>Description of work:</label>
//         <input type="text"/>
//         <label>Address:</label>
//         <input type="text"/>
//         <label>City:</label>
//         <input type="text"/>
//         <label>State:</label>
//         <input type="text"/>
//         <label>Zip Code:</label>
//         <input type="text"/>
//         <label>Email:</label>
//         <input type="text"/>
//         <label>Username:</label>
//         <input type="text"/>
//         <label>Website:</label>
//         <input type="text"/>
//         <label>Profile Image:</label>
//         <input type="text"/>
//         <button>Add Service Pro</button>
//         </div>






