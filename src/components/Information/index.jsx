import React from "react";
import { ReactComponent as IconPin } from "../../assets/images/icon-pin.svg";
import styles from "./styles.module.scss";

function Information() {
  return (
    <div className="text-lighterGreen d-flex flex-column align-items-center gap-2 my-5 fs-5">
      <div className="text-center">
        Meals are available for delivery to your home or for pickup at our
        Acton, MA or Burlington, MA locations.
      </div>
      <div>
        <IconPin className={styles.icon}/>
        <span className="ps-2 cursor-pointer text-decoration-underline">See pickup location details.</span>
      </div>
    </div>
  );
}

export default Information;
