import "../App.css";
import React, { Component } from "react";
import { Button, Form, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class InputForm extends Component {
  render() {
    return (
      <div className="input-form mb-5">
        <Form>
          <NavLink href="#">
           <Link to="/"> <p class="bi bi-arrow-left"> Return to List Page</p></Link>
          </NavLink>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <strong>Book</strong>
            </Form.Label>
            <Form.Control
              style={{ width: "88%", marginLeft: "1%" }}
              type="email"
              placeholder="Enter book name"
            />
          </Form.Group>
          <br />
          <Form.Label>
            <strong>Category</strong>
          </Form.Label>
          <Form.Group className="d-flex justify-content-start p-2 gap-3">
            <Form.Select aria-label="Default select example">
              <option>Select a category</option>
              <option value="1">Novel</option>
              <option value="2">Story</option>
              <option value="3">Biography</option>
            </Form.Select>
            <Button>...</Button>
          </Form.Group>
          <br />

          <Form.Label>
            <strong>Author</strong>
          </Form.Label>
          <Form.Group className="d-flex justify-content-start p-2 gap-3">
            <Form.Select aria-label="Default select example">
              <option>Select Author</option>
              <option value="1">Lev Tolstoy</option>
              <option value="2">Fyodor Dostoyevski</option>
              <option value="3">Honoré de Balzac</option>
            </Form.Select>
            <Button>...</Button>
          </Form.Group><br/>

          <Form.Label>
            <strong>Publisher</strong>
          </Form.Label>
          <Form.Group className="d-flex justify-content-start p-2 gap-3">
            <Form.Select aria-label="Default select example">
              <option>Select Publisher</option>
              <option value="1">ABC Yayıncılık</option>
              <option value="2">Bilge Yayınları</option>
              <option value="3">Adam Yayınları</option>
            </Form.Select>
            <Button>...</Button>
          </Form.Group>
          <Button style={{float:"right",marginBottom:"100px",marginTop:"10px", width:"20%"}}>Add</Button>
        </Form>
      </div>
    );
  }
}
