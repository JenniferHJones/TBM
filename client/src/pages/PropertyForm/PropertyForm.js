// External imports
import React, { Component } from "react";

// Internal Components
import API from "../../utils/API";
import Input from "../../components/PropertyForm/Input";
import Select from "../../components/PropertyForm/Select";
import Button from "../../components/PropertyForm/Button";

class PropertyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newProperty: {
        address: "",
        location: "",
        companyName: "",
        propertyType: "",
        beds: "",
        baths: "",
        size: "",
        rentPrice: 0.0
      },
      propertyTypeOptions: [
        "Single Family",
        "Multi Family",
        "Condominium",
        "Apartment",
        "Comercial"
      ]
    };
    this.handleAddress = this.handleAddress.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleCompany = this.handleCompany.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleCompany(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newProperty: {
        ...prevState.newProperty,
        companyName: value
      }
    }));
  }

  handleLocation(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newProperty: {
        ...prevState.newProperty,
        location: value
      }
    }));
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      newProperty: {
        ...prevState.newProperty,
        [name]: value
      }
    }));
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

  handleFormSubmit = e => {
    e.preventDefault();
    let data = this.state.newProperty;
    data.UserId = this.props.user.currentUser.id;

    API.addProperty(data)
      .then(res => {
        this.props.history.push("/property");
      })
      .catch(err => this.setState({ error: "Unable to add property" }));
  };

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
        <h2 className="mb-4">Add new property</h2>
        <Input
          inputType={"text"}
          title={"Address"}
          name={"address"}
          value={this.state.newProperty.address}
          defaultValue={"123 Random St"}
          handleChange={this.handleInput}
        />{" "}
        <Input
          inputType={"text"}
          name={"location"}
          title={"City, State"}
          value={this.state.newProperty.location}
          defaultValue={"Davis, CA"}
          handleChange={this.handleLocation}
        />{" "}
        <Input
          inputType={"text"}
          name={"company"}
          title={"Company Name"}
          value={this.state.newProperty.company}
          defaultValue={"Tower Bridge"}
          handleChange={this.handleCompany}
        />{" "}
        <Select
          title={"Property Type"}
          name={"propertyType"}
          options={this.state.propertyTypeOptions}
          value={this.state.newProperty.propertyType}
          defaultValue={"Select Property Type"}
          handleChange={this.handleInput}
        />{" "}
        <Input
          inputType={"text"}
          name={"beds"}
          title={"Beds"}
          value={this.state.newProperty.beds}
          defaultValue={"3"}
          handleChange={this.handleInput}
        />{" "}
        <Input
          inputType={"text"}
          name={"baths"}
          title={"Baths"}
          value={this.state.newProperty.baths}
          defaultValue={"2"}
          handleChange={this.handleInput}
        />{" "}
        <Input
          inputType={"text"}
          name={"size"}
          title={"Size (Sq Ft)"}
          value={this.state.newProperty.size}
          defaultValue={"550"}
          handleChange={this.handleInput}
        />{" "}
        <Input
          inputType={"text"}
          name={"rentPrice"}
          title={"Monthly Rent"}
          value={this.state.newProperty.rentPrice}
          defaultValue={"1200.00"}
          handleChange={this.handleInput}
        />{" "}
        <Button
          // action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={{
            float: "inherit",
            margin: "20px"
          }}
        />{" "}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear Form"}
          style={{ float: "inherit" }}
        />{" "}
      </form>
    );
  }
}

export default PropertyForm;
