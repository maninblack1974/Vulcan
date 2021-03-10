import React, { Component } from "react";
import "./style.css";

export default class RegisterPro extends Component {
    render() {
        return (
            <div className="serviceProInfo">
            <label> First Name:</label>
            <input type="text"/>
            <label> Last Name:</label>
            <input type="text"/>
            <label> Company Name:</label>
            <input type="text"/>
            <label>Category:</label>
            <input type="text"/>
            <label>Description of work:</label>
            <input type="text"/>
            <label>Address:</label>
            <input type="text"/>
            <label>City:</label>
            <input type="text"/>
            <label>State:</label>
            <input type="text"/>
            <label>Zip Code:</label>
            <input type="text"/>
            <label>Email:</label>
            <input type="text"/>
            <label>Username:</label>
            <input type="text"/>
            <label>Website:</label>
            <input type="text"/>
            <label>Profile Image:</label>
            <input type="text"/>
            <button>Add Service Pro</button>
            </div>
            
        );
    }
}


















