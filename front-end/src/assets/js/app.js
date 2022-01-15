const root = document.getElementById("root");

import axios from "axios";

const url = window.location.pathname;
console.log(url);

switch (url) {
  case "/companies":
    axios
      .get("http://localhost:3000/companies", {
        method: "GET",
        mode: "no-cors",
      })
      .then((res) => {
        //console.log(res.data)
        res.data.map((elem) => {
          let div = document.createElement("div");
          div.setAttribute("id", elem._id);
          div.innerHTML = `<strong>${elem.companyName}</strong>`;
          root.appendChild(div);
        });
      });
  default:
  case "/":
    axios
      .get("http://localhost:3000", {
        method: "GET",
        mode: "no-cors",
      })
      .then((res) => {
        console.log(res.data);
        res.data.map((elem) => {
          let div = document.createElement("div");
          div.setAttribute("id", elem._id);
          div.innerHTML = `<strong>${elem.firstName} ${elem.lastName}</strong> : ${elem.email}`;
          root.appendChild(div);
        });
      });
}
