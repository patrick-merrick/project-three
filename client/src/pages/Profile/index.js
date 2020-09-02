import React, { Component } from "react";
import Container from "../../components/Container/Container";
import API from "../../utils/API";

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

  // When the component mounts, load the next user profile to be displayed
  componentDidMount() {
    this.loadNextUser("joe-brimeyer-15398015");
  }

  handleBtnClick = (event) => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    this.setState(newState);
    this.loadNextUser();
  };

  loadNextUser = (userId) => {
    API.linkedInSearch(userId)
      .then((res) =>
        this.setState({
          id: res.results[0]._id,
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
// function Profile() {
//   loadSearch = () => {
//     API.response
//       .then((res) =>
//         this.setState({
//           image: res.data.message,
//         })
//       )
//       .catch((err) => console.log(err));
//   };
