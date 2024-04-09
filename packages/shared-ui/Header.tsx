import React from "react";

function Header(props: any) {
  return (
    <h1 style={{ fontWeight: "bold", color: "blue" }}>{props.children}</h1>
  );
}

export { Header };
