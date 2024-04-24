import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const tags = links.map((link,index) =>
  (<a key={index} href={"#" + link}>{link}</a>))

  return <nav>{tags}</nav>
}

export default NavBar;
