import classNames from "classnames";
import React, { useMemo, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import MenuItem from "../MenuItem";
import { ReactComponent as IconCalendar } from "../../assets/images/icon-calendar.svg";
import styles from "./styles.module.scss";

const dayHash = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

function MenuDay({ id, day, date, data }) {
  const formattedDay = useMemo(() => dayHash[day], [day]);
  const [deliveryOption, setDeliveryOption] = useState("");

  const handleOnClickDeliveryOption = (clickedOption) => {
    setDeliveryOption((deliveryOption) =>
      deliveryOption === clickedOption ? "" : clickedOption
    );
  };

  return (
    <>
      <Row className="w-100 py-4">
        <Col lg={8} className="d-flex gap-4 p-0">
          <div>
            <span
              className={classNames(
                "position-relative",
                styles.dayIconContainer
              )}
            >
              <IconCalendar />
              <div
                className={classNames(
                  "text-primary position-absolute top-0 w-100",
                  styles.dayInitial
                )}
              >
                {formattedDay[0]}
              </div>
            </span>
            <span className="text-uppercase text-primary ps-2 fs-5">
              {formattedDay} - {date}
            </span>
          </div>
          <div>
            <Form.Check
              type="checkbox"
              label="Pickup"
              id={`Pickup-${id}`}
              inline
              checked={deliveryOption === "pickup"}
              onChange={() => handleOnClickDeliveryOption("pickup")}
            />
            <Form.Check
              type="checkbox"
              label="Delivery"
              id={`Delivery-${id}`}
              inline
              checked={deliveryOption === "delivery"}
              onChange={() => handleOnClickDeliveryOption("delivery")}
            />
          </div>
        </Col>
      </Row>
      {data.map((dataItem) => (
        <MenuItem
          key={dataItem.id}
          id={dataItem.id}
          name={dataItem.name}
          description={dataItem.description}
          isSoldOut={dataItem.isSoldOut}
        />
      ))}
      <hr className={styles.divider} />
    </>
  );
}

export default MenuDay;
