const axios = require("axios");
const BASEURL = "https://linkedin-id-search-v2.p.rapidapi.com/api/";
// let userId = "joe-brimeyer-15398015";

// Retrieve LinkedIn data on the developer
export default {
  linkedInSearch: function (userId) {
    return axios({
      method: "GET",
      url: BASEURL + userId,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "linkedin-id-search-v2.p.rapidapi.com",
        "x-rapidapi-key": "7984cc2852msh588e23d14de2975p1aac9ejsndf173a4e58c1",
        useQueryString: true,
      },
    });
  },

  //  Gets all developers
  getDevelopers: function () {
    return axios.get("/api/developers");
  },

  // Get developers by id
  getDeveloper: function (id) {
    return axios.get("/api/developers/" + id);
  },

  //Get developer by skill
  getDeveloperSkill: function (skill) {
    return axios.get("/api/developers/" + skill);
  },

  // Save a developer to the db
  saveDeveloper: function (developerData) {
    return axios.post("/api/developers", developerData);
  },
};
