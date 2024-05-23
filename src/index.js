import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//Main App
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//Header component
function Header() {
  return (
    <header className="header">
      <h1 className="header">spXpert Pizza Co.</h1>
    </header>
  );
}

//Menu component
function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas.length > 0 && (
        <>
          <p>
            Authentic Italian cuisine, 6 creative dishes to choose from. All
            freshly baked from our stove oven, all organic and super delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((item) => {
              return <Pizza details={item} key={item.name} />;
            })}
          </ul>
        </>
      )}
    </main>
  );
}

//Pizza components
function Pizza(props) {
  return (
    <li className={`pizza ${props.details.soldOut ? "sold-out" : ""}`}>
      <img src={props.details.photoName} alt={props.details.name}></img>
      <div>
        <h3>{props.details.name}</h3>
        <p>{props.details.ingredients}</p>

        <span>{props.details.soldOut ? "SOLD OUT" : props.details.price}</span>
      </div>
    </li>
  );
}

//footer component
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <OpenHours openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00pm and {closeHour}
          :00pm.
        </p>
      )}
    </footer>
  );
}

function OpenHours({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We are open and serving from {openHour}:00 till {closeHour}:00
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
