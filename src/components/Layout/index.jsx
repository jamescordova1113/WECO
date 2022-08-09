import React from "react";
import Container from "react-bootstrap/Container";

import Header from "../Header";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container
        fluid="md"
        className="d-flex justify-content-center align-items-center my-5 flex-column"
      >
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
