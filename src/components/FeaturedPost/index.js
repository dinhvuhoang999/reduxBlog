import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';

function FeaturedPost(props) {
  const { error, loading, posts } = props;
  if (error) {
    return (
      <div>
        Error!
        {error.message}
      </div>
    );
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {posts.map((post) => <Post key={post} post={post} {...post} />)}
    </div>
  );
}

FeaturedPost.propTypes = {
  posts: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired,
};

export default FeaturedPost;
