import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components';

const ProInfo = styled.div`
  margin: 0 auto 0 auto;
  @media (min-width: 482px) {
    max-width: 449px;
  }

  @media (min-width: 701px) {
    max-width: 668px;
  }

  @media (min-width: 1026px) {
    max-width: 946px;
  }
  > h1 {
    color: #7D7B6D;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    text-align: center;
    margin-top: 34px;
    margin-bottom: 24px;
    @media (max-width: 701px) {
      margin-top: 100px;
    }
  }
  > form {
    background-color: #7D7B6D;
    border: 1px solid #e9eced;
    border-radius: 4px;
    padding: 32px 72px 40px;
    margin-bottom: 40px;
    margin: auto;
    @media (max-width: 701px) {
      border: none;
    }
    > input {
      width: 100%;
      background-color: #fff;
      border: 1px solid #d3d4d5;
      border-radius: 4px;
      padding: 13px 15px;
      font-size: 16px;
      vertical-align: middle;
      line-height: 24px;
      margin: 0 0 5px;
    }
    > label {
      color: #FFE033;
      display: block;
      margin: 4px 0 4px 0;
      font-weight: 700;
    }
    > p {
      text-align: center;
      margin-top: 16px;
      font-size: 12px;
      line-height: 18px;
    }
    > button {
      width: 100%;
      text-align: center;
      box-sizing: border-box;
      display: inline-block;
      vertical-align: middle;
      white-space: nowrap;
      cursor: pointer;
      margin: 0;
      line-height: 24px;
      font-size: 16px;
      font-weight: 700;
      margin: 10px 0 0 0;
      user-select: none;
      border-radius: 4px;
      padding: 12px 22px;
      overflow: visible;
      background-color: #FFE033;
      border: 2px solid transparent;
      color: #7D7B6D;
    }
    > div {
      display: flex;
      align-items: center;
      font-weight: 400;
      color: #676d73;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    a {
      color: #009fd9;
      fill: #009fd9;
      cursor: pointer;
    }
  }
`;


export default class RegisterPro extends Component {
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
      UserId: window.localStorage.getItem('user')
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

   
  handleInputChange(event) {
    const formType = event.target.id;
    this.setState({
      [formType]: event.target.value,
    });
  }

  handleFileChange(event) {
    const fileType = event.target.id;
    this.setState({[fileType]:event.target.files[0]})
    
  }

  openWidget = () => {
    // create the widget
    cloudinary.createUploadWidget(
      {
        cloudName: 'august-innovations-inc',
        uploadPreset: 'uz3n96ci',
      },
      (error, result) => {
        if (result.event === 'success') {
        this.setState({
          imageUrl: result.info.secure_url,
          imageAlt: `An image of ${result.info.original_filename}`
        })}
      },
    ).open();
     // open up the widget after creation
  };

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
      imageUrl,

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
      "servicePro_profileImg": imageUrl,
      "UserId": this.state.UserId
      
    };

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
          Your profile submission was a success!
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
      <ProInfo>
      <h1>Register Your Service</h1>
      <form className="registration-form" onSubmit={this.handleFormSubmit}>
{/*        <fieldset
          className="form-fields container"
          disabled={this.disableForm()}
    >*/}
{/*          <ul className="form-container col-lg-6">
            <li className="form-list-item">*/}
              <label htmlFor="servicePro_companyName">COMPANY NAME</label>
              <input
                type="text"
                id="servicePro_companyName"
                name="servicePro_companyName"
                placeholder="Company Name"
                onChange={this.handleInputChange}
              />
{/*              </li>
              <li className="form-list-item">*/}
              <label htmlFor="servicePro_url">WEBSITE</label>
              <input
                type="text"
                id="servicePro_url"
                name="servicePro_url"
                placeholder="Website"
                onChange={this.handleInputChange}
              />
{/*              </li>
              <li className="form-list-item">*/}
              <label htmlFor="servicePro_phone">PHONE NUMBER</label>
              <input
                type="text"
                id="servicePro_phone"
                name="servicePro_phone"
                placeholder="Phone Number"
                onChange={this.handleInputChange}
              />
{/*              </li>
              <li className="form-list-item">*/}
              <label htmlFor="servicePro_profileImg">PROFILE IMAGE</label>
              <input
                type="button"
                className="btn widget-btn"
                id="servicePro_profileImg"
                name="servicePro_profileImg"
                placeholder="Image or Logo"
                onClick={this.openWidget}
              />
{/*              </li>
              <li className="form-list-item">*/}
              <label htmlFor="servicePro_category">CATEGORY</label>
              <select
                    type="text"
                    id="servicePro_category"
                    name="ServicePro_category"
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
{/*              </li>
              <li className="form-list-item">*/}
              <label htmlFor="servicePro_address">ADDRESS</label>
              <input
                type="text"
                id="servicePro_address"
                name="servicePro_address"
                placeholder="Address"
                onChange={this.handleInputChange}
              />
{/*              </li>
              <li className="form-list-item">*/}
              <label htmlFor="servicePro_city">City</label>
              <input
                type="text"
                id="servicePro_city"
                name="servicePro_city"
                placeholder="City"
                onChange={this.handleInputChange}
              />
{/*              </li>
              <li className="form-list-item">*/}
                  <label htmlFor="servicePro_state">STATE</label>
                  <select
                    type="text"
                    id="servicePro_state"
                    name="ServicePro_state"
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
{/*              </li>
              <li className="form-list-item">*/}
                  <label className="form-zip-label" htmlFor="servicePro_zipCode">
                    ZIP
                  </label>
                  <input
                    type="text"
                    id="servicePro_zipCode"
                    name="servicePro_zipCode"
                    placeholder="Zip"
                    onChange={this.handleInputChange}
                  />
{/*              </li>
              <li className="form-list-item">*/}
{/*}              <input
                className="form-submit-btn"
                type="submit"
                value="Submit"
            /*/}
            <button type="submit">Submit</button>
              {this.renderSuccessMessage()}
{/*          </li>
          </ul>
        </fieldset>*/}
      </form>
      </ProInfo>
    )
  }
}
