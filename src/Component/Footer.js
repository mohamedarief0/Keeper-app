import React from "react";

function footer() {

let totalYear = new Date().getFullYear();
console.log(totalYear);
  return (
    <footer>
      <p>copyrigt © {totalYear} </p>
    </footer>
  );
}
export default footer;
