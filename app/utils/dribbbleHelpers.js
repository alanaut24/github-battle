var axios = require('axios');

var id = "db217f7eeb821b1b8ac8da3f08b15ee2648839c73103ac8815839d86dc553e54";
var sec = "2337956f539622553bcb2f901120a081fd54a3d9de5b0f9ec7b5eb7014653635";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {
  return axios.get('https://api.dribbble.com/user/' + username + param);
}

var helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    }))
    .then(function (info) {
      return info.map(function (user) {
        return user.data
      })
    })
    .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
  }
};

module.exports = helpers;
