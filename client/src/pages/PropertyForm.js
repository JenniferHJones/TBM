import React, { Component } from "react";

/* Import Components */
import Input from "../components/PropertyForm/Input";
import Select from "../components/PropertyForm/Select";
import Button from "../components/PropertyForm/Button";

class PropertyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newProperty: {
        address: "",
        location: "",
        company: "",
        propertyType: "",
        beds: "",
        baths: "",
        size: ""
      },
      propertyTypeOptions: ["Single Family", "Multi Family", "Condominium", "Apartment", "Comercial"]
    };
    this.handleAddress = this.handleAddress.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleCompany = this.handleCompany.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }


  handleCompany(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newProperty: {
          ...prevState.newProperty,
          company: value
        }
      }),
      () => console.log(this.state.newProperty)
    );
  }

  handleLocation(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newProperty: {
          ...prevState.newProperty,
          location: value
        }
      }),
      () => console.log(this.state.newProperty)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newProperty: {
          ...prevState.newProperty,
          [name]: value
        }
      }),
      () => console.log(this.state.newProperty)
    );
  }

  handleAddress(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newProperty: {
          ...prevState.newProperty,
          address: value
        }
      }),
      () => console.log(this.state.newProperty)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newProperty: {
        address: "",
        location: "",
        company: "",
        propertyType: "",
        beds: "",
        baths: "",
        size: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid " onSubmit={this.handleFormSubmit}>
        <h2>Fill out form to add new property.</h2>
        <Input
          inputType={"text"}
          title={"Address"}
          name={"address"}
          value={this.state.newProperty.address}
          placeholder={"123 random st"}
          handleChange={this.handleInput}
        />{" "}
        <Input
          inputType={"text"}
          name={"location"}
          title={"Location"}
          value={this.state.newProperty.location}
          placeholder={"Davis, CA"}
          handleChange={this.handleLocation}
        />{" "}
        <Input
          inputType={"text"}
          name={"company"}
          title={"Company Name"}
          value={this.state.newProperty.company}
          placeholder={"Tower Bridge"}
          handleChange={this.handleCompany}
        />{" "}
        <Select
          title={"Property Type"}
          name={"propertyType"}
          options={this.state.propertyTypeOptions}
          value={this.state.newProperty.propertyType}
          placeholder={"Select Property Type"}
          handleChange={this.handleInput}
        />{" "}
        <Input
          inputType={"number"}
          name={"beds"}
          title={"Beds"}
          value={this.state.newProperty.beds}
          placeholder={"3"}
          handleChange={this.handleInput}
        />{" "}
        <Input
          inputType={"number"}
          name={"baths"}
          title={"Baths"}
          value={this.state.newProperty.baths}
          placeholder={"2"}
          handleChange={this.handleInput}
        />{" "}
        <Input
          inputType={"text"}
          name={"size"}
          title={"Size"}
          value={this.state.newProperty.size}
          placeholder={"2"}
          handleChange={this.handleInput}
        />{" "}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default PropertyForm;
