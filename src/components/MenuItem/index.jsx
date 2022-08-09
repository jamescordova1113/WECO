import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import QuantitySelector from "../QuantitySelector";
import styles from "./styles.module.scss";

function MenuItem({ name, description, isSoldOut }) {

  return (
    <Row className="mt-4 w-100">
      <Col lg={8} className={styles.col}>
        <strong>
          {isSoldOut && "SOLD OUT!!"} {name} | {" "}
        </strong>
        <span dangerouslySetInnerHTML={{__html: description}} />
      </Col>
      <QuantitySelector className={styles.col} isSoldOut={isSoldOut}/>
    </Row>
  );
}

export default MenuItem;
