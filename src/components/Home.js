import React from "react";
import "../styles/Home.css";

function Home() {
  const navLinkActive = () => {
    document.getElementById("home").style.color = "red";
  };

  window.addEventListener("load", navLinkActive);

  return (
    <>
      <div>Hello World</div>
    </>
  );
}

export default Home;
