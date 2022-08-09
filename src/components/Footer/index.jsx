import React from "react";
import Container from "react-bootstrap/Container";
import { ReactComponent as IconFacebook } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as IconInsta } from "../../assets/images/icon-insta.svg";

function Footer() {
  return (
    <footer className="bg-almostBlack py-4">
      <Container
        fluid="md"
        className="d-flex justify-content-between align-items-center p-3"
      >
        <div className="text-uppercase text-secondary fs-4">
          <strong>WECO</strong> Hospitality
        </div>
        <div>
          <a
            href="https://www.facebook.com/wecohospitality/"
            target="__blank"
            referrerPolicy="noreferrer"
          >
            <IconFacebook />
          </a>
          <a
            href="https://www.instagram.com/wecohospitality/"
            target="__blank"
            referrerPolicy="noreferrer"
            className="ms-4"
          >
            <IconInsta />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
