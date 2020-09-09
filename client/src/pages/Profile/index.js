import React, { Component } from "react";
import Container from "../../components/Container/Container";
import API from "../../utils/API";
import SearchDeveloper from "../../components/SearchDeveloper/SearchDeveloper";

class Profile extends Component {
  state = {
    // result: {},
    search: "",
    id: "",
    lastName: "",
    firstName: "",
    headline: "",
    summary: "",
    skills: "",
  };
  // joe-brimeyer-15398015
  // When the component mounts, load the next user profile to be displayed
  componentDidMount() {
    this.loadNextUser("jon");
  }

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

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.search);
    this.loadNextUser(this.state.search);
  };

  handleChange = (event) =>
    this.setState({ ...this.state, search: event.target.value });

  loadNextUser = (userId) => {
    API.linkedInSearch(userId)
      .then((res) =>
        this.setState({
          ...this.state,
          // [name]: value,
          id: this.state.results[0]._id,
          lastName: res.results[0].basicInfo.lastName,
          firstName: res.results[0].basicInfo.firstName,
          headline: res.results[0].basicInfo.headline,
          summary: res.results[0].basicInfo.summary,
          skills: res.results[0].skills,
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container>
        <div>
          <SearchDeveloper
            handleInputChange={this.handleChange}
            handleFormSubmit={this.handleFormSubmit}
          />
          <h1>Profile Page</h1>
          <h4>Profile Information:</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris.
          </p>
        </div>
      </Container>
    );
  }
}
export default Profile;
