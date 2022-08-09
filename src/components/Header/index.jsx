import React from "react";
import Container from "react-bootstrap/Container";

import styles from "./styles.module.scss";
import logo from "../../assets/images/logo-2x.png";
import { ReactComponent as IconMessage } from "../../assets/images/icon-msg.svg";
import classNames from "classnames";

function Header() {
  return (
    <header className="bg-primary text-secondary">
      <Container fluid="md" className="d-flex justify-content-between align-items-center p-3">
        <img src={logo} alt="Weco Logo" className={styles.logo} />
        <div className={classNames("text-uppercase", styles.text)}>Your request</div>
        <a href="mailto:weco@wecohospitality.com" className="link-secondary">
          <IconMessage />
          <span className={classNames("ps-2 text-uppercase", styles.text)}>Need Help?</span>
        </a>
      </Container>
    </header>
  );
}

export default Header;
