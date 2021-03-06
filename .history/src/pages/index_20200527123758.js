import React from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>mtor.io</title>
      </Helmet>
      <Container>
        <div className="bg">
          <div className="hero-text">
            <h4 className="Mentorship Platfotextrm"></h4>
            <h1 className="header">
              Get conected to your peers to learn or teach.
            </h1>
            <h2 className="sub-header">
              Join a network that curate professional conections.
            </h2>

          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
