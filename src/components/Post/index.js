import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const Post = ({
  slug, subtitle, title, description,
}) => (

  <>

    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="post-preview">

            <Link to={`/post/${slug}`}>
              <h2>{title}</h2>
              <h3>{subtitle}</h3>
            </Link>

            <p className="description">{description}</p>

          </div>
          <hr />
        </div>
      </div>
    </div>
  </>
);

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

};

export default Post;
