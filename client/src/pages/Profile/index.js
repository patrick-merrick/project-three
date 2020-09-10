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
                id={this.state.result.results[0]._id}
                firstName={this.state.result.results[0].basicInfo.firstName}
                lastName={this.state.result.results[0].basicInfo.lastName}
                headline={this.state.result.results[0].basicInfo.headline}
                skills={this.state.result.results[0].skills}
                location={this.state.result.results[0].location}
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

// handleBtnClick = (event) => {
//   // Get the data-value of the clicked button
//   const btnType = event.target.attributes.getNamedItem("data-value").value;
//   // Clone this.state to the newState object
//   // We'll modify this object and use it to set our component's state
//   const newState = { ...this.state };

//   this.setState(newState);
//   this.loadNextUser();
// };
// handleInputChange = (event) => {
//   const value = event.target.value;
//   const name = event.target.name;
//   this.setState({
//     [name]: value,
//   });
// };

// ...this.state,
// [name]: value,
// id: this.state.result[0]._id,
// lastName: res.results[0].basicInfo.lastName,
// firstName: res.results[0].basicInfo.firstName,
// headline: res.results[0].basicInfo.headline,
// summary: res.results[0].basicInfo.summary,
// skills: res.results[0].skills,
// })
// )
