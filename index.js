import path from 'path';
import express from 'express';

const app = express();

app.use('',express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  return response.sendFile('', { root: '.' });
});

app.get('/auth/discord', (request, response) => {
  return response.sendFile('', { root: '.' });
});

const port = '57159';
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));


// make sure user has logged in with access token
window.onload = () => {
  const fragment = new URLSearchParams(window.location.hash.slice(1));
  const [ accessToken, tokenType ] = [ fragment.get('access_token'), fragment.get('token_type')];

  if (!accessToken) {
    window.location.href('/');
    // if no access token accepted...

  }


};

// fetch info about the user
fetch('https://discord.com/api/user/@me', {
  headers: {
    authorization: `${tokenType} ${accessToken}`,
  },
})
.then(result => result.json())
.then(response => {
  // handle response
})
.catch(console.error);