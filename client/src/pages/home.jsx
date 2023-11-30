import { Outlet } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function homePage() {
  return (
    <>
      <p>Home</p>
      <div id="detail"></div>
      <Outlet />
    </>
  );
}

export default homePage;
