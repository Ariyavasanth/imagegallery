import ReactDOM from "react-dom/client";
import rabbitDog from "./assets/rabbit_years_dog.jpg";
import lab_2 from "./assets/100100_dog.png";
import lab from "./assets/lab.png";
import pomerian from "./assets/pomerian.png";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Images(props) {
  return (
    <div className="section">
      <div className = "image-container">
        <img src={props.src} alt={props.name} />
      </div>
      <span>{props.name}</span>
    </div>
  );
}

const dog_names = [
  {
    name: "Julie's Rabbit Ears",
    src: rabbitDog,
  },
  {
    name: "The Innocent Look",
    src: lab_2,
  },
  {
    name: "Big Eyed Buggy",
    src: lab,
  },
  {
    name: "The Saint Doggo",
    src: pomerian,
  },
  {
    name: "Julie's Rabbit Ears",
    src: rabbitDog,
  },
  {
    name: "The Innocent Look",
    src: lab,
  },
  {
    name: "Big Eyed Buggy",
    src: lab_2,
  },
  {
    name: "The Saint Doggo",
    src: pomerian,
  },
];

root.render(
  <div className="container">
    {dog_names.map((items, index) => (
      <Images key={index} src={items.src} name={items.name} />
    ))}
  </div>
);
