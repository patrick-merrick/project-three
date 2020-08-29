import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import API from "../../utils/API";

class Profile extends Component {
  state = {
    id: "",
    lastName: "",
    firstName: "",
    summary: "",
  };

  // When the component mounts, load the next user profile to be displayed
  componentDidMount() {
    this.loadNextUser();
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

  loadNextUser = () => {
    API.linkedInSearch()
      .then((res) =>
        this.setState({
          id: res.data.id,
          lastName: res.data.lastName,
          firstName: res.data.firstName,
          summary: res.data.summary,
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Router>
        <div>
          <h1>Profile Page</h1>
          <h4>Profile Information:</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem
            at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
            ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,
            suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
            lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
            tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nam nec ante.
          </p>
        </div>
      </Router>
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
