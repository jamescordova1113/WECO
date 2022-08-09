import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import classNames from "classnames";
import styles from "./styles.module.scss";

function QuantitySelector({ className, isSoldOut }) {
  const [value, setValue] = useState(0);

  return (
    <Col
      lg={{ span: 3, offset: 1 }}
      className={classNames(
        "d-flex align-items-center justify-content-end",
        className,
        styles.col
      )}
    >
      <Button
        variant="outline-primary"
        onClick={() => setValue((val) => val - 1)}
        disabled={isSoldOut || value === 0}
        className={classNames(styles.button, 'p-0')}
      >
        -
      </Button>
      <input
        type="number"
        readOnly
        disabled={isSoldOut}
        value={value}
        className={classNames(styles.input, "text-center border-0")}
      />
      <Button
        variant="outline-primary"
        onClick={() => setValue((val) => val + 1)}
        disabled={isSoldOut}
        className={classNames(styles.button, 'p-0')}
      >
        +
      </Button>
    </Col>
  );
}

export default QuantitySelector;
