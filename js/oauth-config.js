/*exported OAuthConfig*/
var OAuthConfig = (function() {
  'use strict';

  /* replace these values with yours obtained in the
  "My Applications" section of the Spotify developer site */
  var clientId = '3f03adf3c3ff44c19241dc261776dfb2';
  var redirectUri = 'https://signed-auth.netlify.app/callback.html';

  if (location.href.indexOf('https://signed-auth.netlify.app') === 0) {
    redirectUri = 'https://signed-auth.netlify.app/callback.html';
  }

  var host = /http[s]?:\/\/[^/]+/.exec(redirectUri)[0];

  return {
    clientId: clientId,
    redirectUri: redirectUri,
    host: host,
    stateKey: 'spotify_auth_state'
  };
})();
