import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Header } from "../components/Header";
import { Estate } from "../components/Estate";

console.log('funguju')

const currentPath = window.location.pathname;
const pathWithoutHTML = currentPath.slice(0, -5)

console.log(pathWithoutHTML)

const response = await fetch(
  `https://apps.kodim.cz/daweb/trening-api/apis/realitka/${pathWithoutHTML}`
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
      odkaz1="/dum01.html" 
      label1="Dům 1"
      odkaz2="/dum02.html" 
      label2="Dům 2"
      odkaz3="/dum03.html"
      label3="Dům 3"
      odkaz4="/dum04.html"
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






