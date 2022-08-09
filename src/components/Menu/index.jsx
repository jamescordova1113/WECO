import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Information from "../Information";
import MenuDay from "../MenuDay";
import styles from "./styles.module.scss";

function Menu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://app-staging.weco-dev.com/api/v1/sample/")
      .then((response) => response.json())
      .then((data) => {
        let dataByDay = {};

        data.forEach((dataItem) => {
          if (dataItem.item.name === "artichoke dip 7/25") {
            debugger;
          }
          let idx = dataItem.item.name.search(/\d{1,2}\/\d{1,2}$/);
          let _temp = dataItem.item.name;
          const _date = _temp.slice(idx);

          if (dataByDay[_date]) {
            dataByDay[_date].items.push({
              id: dataItem.item.id,
              name: _temp.slice(0, idx),
              description: dataItem.item.description,
              isSoldOut: dataItem.sold_out,
            });
          } else {
            dataByDay[_date] = {
              day: dataItem.day,
              date: _date,
              items: [
                {
                  id: dataItem.item.id,
                  name: _temp.slice(0, idx),
                  description: dataItem.item.description,
                  isSoldOut: dataItem.sold_out,
                },
              ],
            };
          }
        });

        let sortedKeys = Object.keys(dataByDay);

        sortedKeys.sort((a, b) => {
          const _splittedA = a.split("/");
          let _a = new Date().setMonth(_splittedA[0], _splittedA[1]);

          const _splittedB = b.split("/");
          let _b = new Date().setMonth(_splittedB[0], _splittedB[1]);

          return _a - _b;
        });

        const sortedData = sortedKeys.map((_key) => {
          return dataByDay[_key];
        });

        setData(sortedData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Information />
      <Row className="w-100">
        <Col
          lg={{ span: 3, offset: 9 }}
          className="d-flex align-items-center justify-content-end"
        >
          <div className={classNames(styles.quantity, "fs-5")}>Quantity</div>
        </Col>
      </Row>
      {data.map((dataItem, idx) => (
        <MenuDay
          key={idx}
          id={idx}
          day={dataItem.day}
          date={dataItem.date}
          data={dataItem.items}
        />
      ))}
      <Button
        className={classNames(
          "text-uppercase rounded-0 my-5 p-3",
          styles.button
        )}
      >
        Add to bag
      </Button>
    </>
  );
}

export default Menu;
