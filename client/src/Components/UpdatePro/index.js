import React, { Component } from "react";
import axios from "axios";
import "./style.css";


export default class UpdatePro extends Component {


  constructor(props) {
    super(props);

    this.state = {
      servicePro_companyName: "",
      servicePro_url: "",
      servicePro_phone: "",
      servicePro_category: "",
      servicePro_address: "",
      servicePro_city: "",
      servicePro_state: "",
      servicePro_zipCode: "",
      servicePro_profileImg: "",
      UserId: window.localStorage.getItem('user'),
      existingProfile: [
      ]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }


  componentDidMount() {

    const {
      servicePro_companyName,
      servicePro_url,
      servicePro_phone,
      servicePro_category,
      servicePro_address,
      servicePro_city,
      servicePro_state,
      servicePro_zipCode,
      servicePro_profileImg,

    } = this.state;
    const formData = {
      "UserId": this.state.UserId

    };

    //store a copy of the array
    const copyExisting = this.state.existingProfile;

      axios.post("/api/getupdatepros", formData).then((res) => {
        console.log("*****UPDATE-TEST******", res.data);
        for (var i = 0; i < res.data.length; i++) {
          copyExisting.push(res.data[i])
        }
        console.log("copy exiting success" + copyExisting);
        this.setState({
          existingProfile: [...copyExisting]
        });
      });
  }

  handleInputChange(event) {
    const formType = event.target.id;
    this.setState({
      [formType]: event.target.value,
    });
  }

  handleFileChange(event) {
    const fileType = event.target.id;
    this.setState({ [fileType]: event.target.files[0] })

  }

  handleFormSubmit(event) {
    event.preventDefault();
    const {
      servicePro_companyName,
      servicePro_url,
      servicePro_phone,
      servicePro_category,
      servicePro_address,
      servicePro_city,
      servicePro_state,
      servicePro_zipCode,
      servicePro_profileImg,

    } = this.state;
    const formData = {
      "servicePro_companyName": servicePro_companyName,
      "servicePro_url": servicePro_url,
      "servicePro_phone": servicePro_phone,
      "servicePro_category": servicePro_category,
      "servicePro_address": servicePro_address,
      "servicePro_city": servicePro_city,
      "servicePro_state": servicePro_state,
      "servicePro_zipCode": servicePro_zipCode,
      "servicePro_profileImg": servicePro_profileImg,
      "UserId": this.state.UserId

    };


    // console.log("****",formData);
    axios.put("/api/postupdatepros", formData).then((res) => {
      console.log("***********", res.data);
      if (res.data) {
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
          Your profile was updated successfully!
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
      <form className="registration-form" onSubmit={this.handleFormSubmit}>
        <fieldset
          className="form-fields container"
          disabled={this.disableForm()}
        >
          <ul className="form-container col-lg-6" >
          {this.state.existingProfile.map(item => (
            <li className="form-list-item">
              <label htmlFor="servicePro_companyName">COMPANY NAME</label>
              <input
                type="text"
                id="servicePro_companyName"
                name="servicePro_companyName"
                placeholder="Company Name"
                defaultValue={item.servicePro_companyName}
                onChange={this.handleInputChange}
              />
            </li>
            ))}
          {this.state.existingProfile.map(item => (

            <li className="form-list-item">
              <label htmlFor="servicePro_url">WEBSITE</label>
              <input
                type="text"
                id="servicePro_url"
                name="servicePro_url"
                placeholder="Website"
                defaultValue={item.servicePro_url}
                onChange={this.handleInputChange}
              />
            </li>
            ))}
            {this.state.existingProfile.map(item => (
              <li className="form-list-item">
                <label htmlFor="servicePro_phone">PHONE NUMBER</label>
                <input
                  type="text"
                  id="servicePro_phone"
                  name="servicePro_phone"
                  placeholder="Phone Number"
                  defaultValue={item.servicePro_phone}
                  onChange={this.handleInputChange}
                />
              </li>
            ))}
            {this.state.existingProfile.map(item => (

            <li className="form-list-item">
              <label htmlFor="servicePro_profileImg">PROFILE IMAGE</label>
              <input
                type="file"
                id="servicePro_profileImg"
                name="servicePro_profileImg"
                placeholder="Image or Logo"
                defaultValue={item.servicePro_profileImg}
                onChange={this.handleFileChange}
              />
            </li>
            ))}
            {this.state.existingProfile.map(item => (
            <li className="form-list-item">
              <label htmlFor="servicePro_category">CATEGORY</label>
              <select
                type="text"
                id="servicePro_category"
                name="ServicePro_category"
                defaultValue={item.servicePro_category}
                onChange={this.handleInputChange}
              >
                <option defaultValue="">Choose...</option>
                <option value="Apparel">Apparel</option>
                <option value="Bar/Beer Cleaning">Bar/Beer Cleaning</option>
                <option value="Electrican">Electrican</option>
                <option value="General Cleaning">General Cleaning</option>
                <option value="HVAC">HVAC</option>
                <option value="Food Distributor">Food Distributor</option>
                <option value="Alcohol Distributor">Alcohol Distributor</option>
                <option value="Hood Cleaning">Hood Cleaning</option>
                <option value="Plumber">Plumber</option>
                <option value="Refrigeration">Refrigeration</option>
                <option value="Outdoor Heating">Outdoor Heating</option>
                <option value="Linens">Linens</option>
                <option value="Pest Control">Pest Control</option>
                <option value="Window Repair">Window Repair</option>
                <option value="Table Booth Repair">Table Booth Repair</option>
              </select>
            </li>
            ))}
            {this.state.existingProfile.map(item => (
            <li className="form-list-item">
              <label htmlFor="servicePro_address">ADDRESS</label>
              <input
                type="text"
                id="servicePro_address"
                name="servicePro_address"
                placeholder="Address"
                defaultValue={item.servicePro_address}
                onChange={this.handleInputChange}
              />
            </li>
            ))}
            {this.state.existingProfile.map(item => (
            <li className="form-list-item">
              <label htmlFor="servicePro_city">City</label>
              <input
                type="text"
                id="servicePro_city"
                name="servicePro_city"
                placeholder="City"
                defaultValue={item.servicePro_city}
                onChange={this.handleInputChange}
              />
            </li>
            ))}
            {this.state.existingProfile.map(item => (
            <li className="form-list-item">
              <label htmlFor="servicePro_state">STATE</label>
              <select
                type="text"
                id="servicePro_state"
                name="ServicePro_state"
                defaultValue={item.servicePro_state}
                onChange={this.handleInputChange}
              >
                <option defaultValue="">Choose...</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </li>
            ))}
            {this.state.existingProfile.map(item => (
            <li className="form-list-item">
              <label className="form-zip-label" htmlFor="servicePro_zipCode">
                ZIP
                  </label>
              <input
                type="text"
                id="servicePro_zipCode"
                name="servicePro_zipCode"
                placeholder="Zip"
                defaultValue={item.servicePro_zipCode}
                onChange={this.handleInputChange}
              />
            </li>
            ))}
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