'use strict';

const axios = require('axios');




module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=i0ng01ifl76kt2foju7hisn46j'
    + '&client_secret=5uq2hv63r35ev80iu3oj53ljse'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://trohini31383.github.io/meetup/'
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
}

module.exports.refreshAccessToken = async (event) => {


  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=i0ng01ifl76kt2foju7hisn46j'
    + '&client_secret=5uq2hv63r35ev80iu3oj53ljse'
    + '&grant_type=refresh_token'
    + '&refresh_token=' + event.pathParameters.code;



  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {

      'Access-Control-Allow-Origin': '*'

    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
}




