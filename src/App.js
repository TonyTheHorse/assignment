import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import All from "./all";
import "./styles.scss";

const App = () => {
  const [eventKey, setEventKey] = useState("all");
  const [hideSecondHeader, setHideSecondHeader] = useState(false);
  let content = null;
  switch (eventKey) {
    case "all":
      content = <All />;
      break;
    case "tw":
      content = null;
      break;
    case "fb":
      content = null;
      break;
    case "ig":
      content = null;
      break;
    case "yt":
      content = null;
      break;
    default:
      content = <All />;
      break;
  }

  const hideHeader = () => {
    setHideSecondHeader(true);
  };

  return (
    <div className="frame">
      <div className="header">
        <div className="card">CARD</div>
        <div className="ques">?</div>
      </div>
      <div className="second-header" hidden={hideSecondHeader}>
        <div className="icon-bar">
          <div
            className={"icon" + (eventKey === "all" ? " selected" : "")}
            onClick={() => {
              setEventKey("all");
            }}
          >
            All
          </div>
          <div
            className={"icon" + (eventKey === "tw" ? " selected" : "")}
            onClick={() => {
              setEventKey("tw");
            }}
          >
            <FaTwitter />
          </div>
          <div
            className={"icon" + (eventKey === "fb" ? " selected" : "")}
            onClick={() => {
              setEventKey("fb");
            }}
          >
            <FaFacebookF />
          </div>
          <div
            className={"icon" + (eventKey === "ig" ? " selected" : "")}
            onClick={() => {
              setEventKey("ig");
            }}
          >
            <FaInstagram />
          </div>
          <div
            className={"icon" + (eventKey === "yt" ? " selected" : "")}
            onClick={() => {
              setEventKey("yt");
            }}
          >
            <FaYoutube />
          </div>
        </div>
        <div className="hide" onClick={hideHeader}>
          HIDE
        </div>
      </div>
      <div className="fix-top">TOP TERMS</div>
      <div className="content">{content}</div>
      <div className="footer">FOOTER</div>
    </div>
  );
};

export default App;
