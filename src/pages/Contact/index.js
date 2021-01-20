import React from 'react';

import Banner from '../../components/Banner';
import Form from '../../components/Form';
import StyledHero from '../../components/StyleHero';
import imgContact from '../../images/contact-bg.jpg';
import Footer from '../../components/Footer';

const Contact = () => (

  <>
    <StyledHero img={imgContact}>

      <Banner title="Contact Me" subtitle="Have questions? I have answers." />

    </StyledHero>

    <Form />

    <Footer />

  </>
);

export default Contact;
