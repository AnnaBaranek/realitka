import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Header } from "../components/Header";
import { Estate } from "../components/Estate";


const currentPath = window.location.pathname;
const response = await fetch(
  `https://apps.kodim.cz/daweb/trening-api/apis/realitka/${currentPath}`
);
const data = await response.json();

console.log(data.title);
console.log(data.text);
console.log(data.price);
console.log(data.city);
console.log(data.contact.name);
console.log(data.contact.email);
console.log(data.contact.phone);
console.log(data.photo);





document.querySelector("#root").innerHTML = render(
  <div className="container">
    <Header
      odkaz1="/dum01"
      label1="Dům 1"
      odkaz2="/dum02"
      label2="Dům 2"
      odkaz3="/dum03"
      label3="Dům 3"
      odkaz4="/dum04"
      label4="Dům 4"
    />
  <Estate 
  title={data.title}
  text={data.text} 
  price={data.price}
  city={data.city}
  contactName={data.contact.name}
  contactEmail={data.contact.email}
  contactPhone={data.contact.phone}
  photo={data.photo}
  />

  </div>
);






