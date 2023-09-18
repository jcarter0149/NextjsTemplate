import { clientCredentials } from './client';
const getPosts = (id) => new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/posts?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((resp) => {
        resp.json().then(r => resolve(r));
      })
      .catch(reject);
  });

  const addPost = (post) => new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/post`, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((resp) => {
        resolve(resp)
      })
      .catch(reject);
  });

  export{
    getPosts,
    addPost
  }