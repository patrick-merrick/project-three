import React, { Component } from "react";
import Container from "../../components/Container/Container";
import API from "../../utils/API";
import SearchDeveloper from "../../components/SearchDeveloper/SearchDeveloper";
import ProfileCard from "../../components/ProfileCard/index";
import { Card } from "@material-ui/core";
// import Form from "../../components/Form/index";

class Profile extends Component {
  state = {
    result: {},
    search: "",
  };

  // joe-brimeyer-15398015

  // When the component mounts, load the next user profile to be displayed
  componentDidMount() {
    this.loadNextUser("jon");
  }

  loadNextUser = (userId) => {
    API.linkedInSearch(userId)
      .then((res) => this.setState({ ...this.state, result: res.data }))
      .catch((err) => console.log(err));
    // console.log(result);
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ ...this.state, search: event.target.value, [name]: value });
    console.log(value);
    console.log(name);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.search);
    this.loadNextUser(this.state.search);
  };

  render() {
    return (
      <Container>
        <div>
          {/* <Form /> */}
          <SearchDeveloper
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />

          <Card heading={this.state.result.results || "Search for a developer"}>
            {this.state.result.results ? (
              <ProfileCard
                // id={this.state.result.results[0]._id}
                firstName={this.state.result.results[0].basicInfo.firstName}
                lastName={this.state.result.results[0].basicInfo.lastName}
                headline={this.state.result.results[0].basicInfo.headline}
                // skills={this.state.result.results[0].skills}
                location={this.state.result.results[0].basicInfo.location}
                summary={this.state.result.results[0].basicInfo.summary}
              />
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card>
        </div>
      </Container>
    );
  }
}

export default Profile;
