import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "../Grid"



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
                  <img src={servicePros.servicePro_profileImg} alt={servicePros.name} />
                </Col>
                <Col size="10" className="pl-2">
                  <h3 className="serviceProviderCategory">{servicePros.servicePro_category}</h3>
                  <h4 className="serviceProviderWebsite">{servicePros.servicePro_url}</h4>
                  <p className="serviceProviderPhone pr-3">{servicePros.servicePro_phone}</p>
                </Col>
              </Row>
              <Row>
                <button className="save btn mt-4 ml-3 mr-1" id={servicePros.id} onClick={(event) => props.handleSavedButton(event)}>
                  Save Service Provider</button>             
                <a href={servicePros.link} target="_blank" rel="noopener noreferrer">
                  <button className="view btn mt-4">
                    View Service Provider</button>                 
                </a>
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
            <label htmlFor="search-bar">Search</label>
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