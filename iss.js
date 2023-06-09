const request = require('request');
//Implement a function fetchISSFlyOverTimes.
const fetchISSFlyOverTimes = function(coords, callback) {  
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;
   request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`), null);
      return;
    }

    const passes = JSON.parse(body).response;
    callback(null, passes);
    
    
  });
};
module.exports = { fetchISSFlyOverTimes };
