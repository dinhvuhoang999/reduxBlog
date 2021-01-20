import { fetchPostsBegin, fetchPostsSuccess, fetchPostsFailure } from './index';

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function fetchPosts() {
  return (dispatch) => {
    dispatch(fetchPostsBegin());
    return fetch('https://zsvt3.sse.codesandbox.io/posts')
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchPostsSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchPostsFailure(error)));
  };
}

export default fetchPosts;
