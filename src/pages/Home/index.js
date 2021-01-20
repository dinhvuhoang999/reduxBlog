import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Banner from '../../components/Banner';
import FeaturedPost from '../../components/FeaturedPost';
import StyledHero from '../../components/StyleHero';
import Footer from '../../components/Footer';

import fetchPosts from '../../redux/actions/fetchposts';

import imgHome from '../../images/home-bg.jpg';

const Home = ({ posts, error, loading }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  });

  return (
    <>
      <StyledHero img={imgHome}>
        <Banner title="Clean Blog" subtitle="A Blog Theme by Start Bootstrap" />
      </StyledHero>

      <FeaturedPost
        posts={posts}
        error={error}
        loading={loading}
      />

      <Footer />

    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.postsList,
  loading: state.posts.loading,
  error: state.posts.error,
});

Home.propTypes = {
  posts: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Home);
// export default Home;
