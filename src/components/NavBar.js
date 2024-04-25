import React from "react";

function NavBar(props) {
  // const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */
    <>
      <a href="#home" key={props.home}>home</a>
      <a href="#about" key={props.about}>about</a>
      <a href="#projects" key={props.projects}>projects</a>
    </>
  }</nav>;
}

export default NavBar;
