import React, { Component } from "react";
import axios from "axios";


export default class SearchPros extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "servicePro_firstName",
      searchType: "servicePro_lastName",
      registeredPros: [],
      userInput: "",
    };

    //bind events
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  componentDidMount() {
    axios.get("/api/registerpros").then((res) => {
      this.setState({
        registeredPros: res.data,
      });
    });
  }

  handleInputChange(event) {
    const searchParams = {
      searchValue: this.state.searchValue,
      userInput: event.target.value,
    };
    axios.post("/api/searchpros", searchParams).then((res) => {
      this.setState({
        registeredPros: res.data,
        userInput: event.target.value,
      });
    });
  }

  handleRadioChange(event) {
    const searchParams = {
      searchValue: event.target.getAttribute("value"),
      userInput: this.state.userInput,
    };
    axios.post("/api/searchpros", searchParams).then((res) => {
      this.setState({
        registeredPros: res.data,
        searchValue: event.target.getAttribute("value"),
        searchType: event.target.getAttribute("text"),
      });
    });
  }

  renderPros() {
    let result = null;
    const registeredpros = this.state.registeredPros;
    if (registeredpros.length > 0) {
      result = registeredpros.map((servicePros) => {
        return (
          <tr key={servicePros.id}>
            <td className="align-middle">{servicePros.servicePro_lastName}</td>
            <td className="align-middle">{servicePros.servicePro_firstName}</td>
            <td className="align-middle">{servicePros.servicePro_category}</td>
            <td className="align-middle">{servicePros.servicePro_companyName}</td>
            <td className="align-middle">
              <i
                className="fas fa-trash-alt delete-submission"
                target={servicePros.id}
                onClick={this.deleteSubmission}
              ></i>
            </td>
          </tr>
        );
      });
    }
    return result;
  }

  render() {
    return (
      <div className="registered-pros">
        <div className="pros-search container">
          <div className="search-bar">
            <label htmlFor="search-bar">Search</label>
            <input
              id="search-bar"
              name="search-bar"
              type="text"
              placeholder={`Enter ${this.state.searchType}`}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="search-type-container">
            <label htmlFor="search-type">Filter</label>
            <ul className="search-type-radio-list">
              <li className="search-type-radio-list-item">
                <label>Service Pro First Name</label>
                <input
                  type="radio"
                  name="search-type"
                  value="servicePro_firstName"
                  text="First Name"
                  onChange={this.handleRadioChange}
                />
              </li>
              <li className="search-type-radio-list-item">
                <label>Service Pro Last Name</label>
                <input
                  type="radio"
                  name="search-type"
                  value="servicePro_lastName"
                  text="Last Name"
                  onChange={this.handleRadioChange}
                />
              </li>
              <li className="search-type-radio-list-item">
                <label>Category</label>
                <input
                  type="radio"
                  name="search-type"
                  value="servicePro_category"
                  text="Category"
                  onChange={this.handleRadioChange}
                />
              </li>
              <li className="search-type-radio-list-item">
                <label>Company Name</label>
                <input
                  type="radio"
                  name="search-type"
                  value="servicePro_companyName"
                  text="Company Name"
                  onChange={this.handleRadioChange}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="caption">Searched Service Pros</div>
        <table className="registered-pros-table container">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Category</th>
              <th scope="col">Company Name</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{this.renderPros()}</tbody>
        </table>
      </div>
    );
  }
}