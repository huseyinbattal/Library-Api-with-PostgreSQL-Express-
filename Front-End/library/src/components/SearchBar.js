import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class SearchBar extends Component {
 
  render() {

    let inputValue;
    const handleChange = (e) => {
      if (inputValue === "book") {
        alert(inputValue)
      }
    };
    const handleInput = (e) => {
  inputValue=e.target.value
}
    return (
      <div>
        <InputGroup>
          <FormControl
            onChange={(e) => {handleInput(e)}}
            placeholder="Type keyword..."
            aria-label="Recipient's username with two button addons"
          />
          <Button
            onClick={(e) => {
              handleChange(e);
            }}
            variant="primary"
          >
            🔎 Search{" "}
          </Button>
          <Link to="/forms">
            <Button variant="danger">➕ Add New Record</Button>
          </Link>
        </InputGroup>
      </div>
    );
  }
}
