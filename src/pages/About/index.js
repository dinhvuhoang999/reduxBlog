import React from 'react';

import Banner from '../../components/Banner';
import StyledHero from '../../components/StyleHero';
import imgAbout from '../../images/about-bg.jpg';
import Footer from '../../components/Footer';

const About = () => (

  <div>

    <StyledHero img={imgAbout}>
      <Banner title="About Me" subtitle="This is what I do." />
    </StyledHero>

    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="contentAbout">

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Saepe nostrum ullam eveniet pariatur voluptates odit,
              fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime
              quae totam ducimus consectetur?
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Eius praesentium recusandae illo eaque architecto error,
              iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia
              voluptas voluptatibus, minus!
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam,
              excepturi aliquid ex itaque esse est vero natus
              quae optio aperiam soluta voluptatibus
              corporis atque iste neque sit tempora!
            </p>

          </div>
        </div>
      </div>
    </div>
    <hr />

    <Footer />

  </div>

);
export default About;
