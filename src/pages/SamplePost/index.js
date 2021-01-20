import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Footer from '../../components/Footer';
import StyledHero from '../../components/StyleHero';

import fetchPosts from '../../redux/actions/fetchposts';

import './style.css';
import imgPost from '../../images/post-bg.jpg';

const SamplePost = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  });

  const { slug } = match.params;

  const details = useSelector((state) => state.posts.postsList.find(
    (posts) => posts.slug === slug,
  ));

  if (!details) {
    return (
      <div>
        <h1>no post</h1>
      </div>
    );
  }

  return (
    <>
      <div>
        <StyledHero img={imgPost}>
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="post-heading">
                  <h1>{details.title}</h1>
                  <h2 className="subheading">{details.subtitle}</h2>
                  <span className="meta">{details.description}</span>
                </div>
              </div>
            </div>
          </div>
        </StyledHero>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto" />
            <hr />
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postsList,
});

SamplePost.propTypes = {
  match: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(SamplePost);
