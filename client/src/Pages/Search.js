import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "../Components/Grid"
import { FormBtn } from "../Components/Form"


export default class SearchPros extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "servicePro_category",
      searchType: "Category",
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
          <div className="card mb-5">
            <div className="card-body">
              <Row className="SearchResult row" id={servicePros.servicePro_companyName} key={servicePros._id}>
                <Col size="2">
                
                </Col>
                <Col size="10" className="pl-2">
                  <h3 className="serviceProviderCompanyName">{servicePros.servicePro_companyName}</h3>
                  <h4 className="serviceProviderCategory">{servicePros.servicePro_category}</h4>
                  <p className="serviceProviderWebiste pr-3">{servicePros.servicePro_url}</p>
                </Col>
              </Row>
            </div>
          </div>
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
            <label htmlFor="search-bar">Search by Category</label>
            <input
              id="search-bar"
              name="search-bar"
              type="text"
              placeholder={`Enter ${this.state.searchType}`}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="caption">Searched Service Pros</div>
        <div>{this.renderPros()}</div>
      </div>
    );
  }
}