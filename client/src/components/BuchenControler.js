import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../index.css"
const CustomPopup = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden"
      }}
      className="overlay"
    >
      <div>
        <h2>{props.title}</h2>
        <span  onClick={closeHandler}>
          &times;
        </span>
        <div >{props.children}</div>
      </div>
    </div>
  );
};

CustomPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default CustomPopup;