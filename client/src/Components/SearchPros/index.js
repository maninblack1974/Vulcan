import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "../Grid"
import styled from 'styled-components';

const SearchForm = styled.div`
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
                <Col size="6" className="pl-2">
                  <h3 className="serviceProviderCategory">{servicePros.servicePro_category}</h3>
                  <h4 className="serviceProviderWebsite">{servicePros.servicePro_url}</h4>
                  <p className="serviceProviderPhone pr-3">{servicePros.servicePro_phone}</p>
                </Col>
              </Row>
{/*              <Row>
                <a href={servicePros.link} target="_blank" rel="noopener noreferrer">
                  <button className="view btn mt-4" id={servicePros.id} onClick={(event) => props.handleSavedButton(event)}>
                    Save Service Provider</button> 
                </a>            
                <a href={servicePros.link} target="_blank" rel="noopener noreferrer">
                  <button className="view btn mt-4">
                    View Service Provider</button>                 
                </a>
</Row>*/}
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
        <div className="caption">Service Professionals In Your Area</div>
        <div>{this.renderPros()}</div>
    </div>
    )
  }
}