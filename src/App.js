
import React, { useEffect } from 'react';
import './App.css';
import { applyStyles } from './functions';



const cards = [
  {
    title: "Free",
    price: "$0",
    unit: " / mo",
    users: "10 users included",
    storage: "2 GB of storage",
    support: "Email support",
    buttonText: "Sign up for free",
  },
  {
    title: "Pro",
    price: "$15",
    unit: " / mo",
    users: "20 users included",
    storage: "10 GB of storage",
    support: "Priority email support",
    buttonText: "Get started",
  },
  {
    title: "Enterprise",
    price: "$29",
    unit: " / mo",
    users: "30 users included",
    storage: "15 GB of storage",
    support: "Phone and email support",
    buttonText: "Contact us",
  },
];


const Card = ({ title, price, unit, users, storage, support, buttonText }) => {

  return (
        <div className="card_body">
          <h5 className="card_title">{title}</h5>
          <div className="card_main">
            <div className="card_price_unit">
              <h2 className="card_price">{price}</h2>
              <h2 className="unit">{unit}</h2>
            </div>
          
            <div className="list_container">
              <span className="user list">
                {users}
              </span>
              <span className="storage list">
                {storage}
              </span>
              <span className="support list">
                {support}
              </span>
              <span className="helpCenter list">
                  Help center access
              </span>
            </div>
            <button className="card_botton">{buttonText}</button>
          </div>
        </div>
  );
};



function App(){
    useEffect(() => {
      applyStyles();
    }, []);
  
  return (        
    <div className="body">
      <div className="header">
        <h5 className="name">Company name</h5>
        <div className="nav">
          <span className="nav_con">Features</span>
          <span className="nav_con">Enterprise</span>
          <span className="nav_con">Support</span>
          <span className="nav_con">Pricing</span>
        </div>
        <a className="button1">Sign up</a>
      </div>
      <div className="title">
        <h1 className="pricing">Pricing</h1>
        <p className="explain">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>

      <div className="card_container">
          {cards.map((card) => (
            <div key={card.title} className="card">
              <Card {...card} />
            </div>
        ))}
      </div>

      <div className="footer_container">
          <div className="image_container">
            <img className="image" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="B" width="24" height="24"/><br></br>
            <small className="years">© 2017-2018</small>
          </div>
          <div className="links">
            <h5 className="link_title">Features</h5>
            <div className="list_box">
              <span className="link">Cool stuff</span>
              <span className="link">Random feature</span>
              <span className="link">Team feature</span>
              <span className="link">Stuff for developers</span>
              <span className="link">Another one</span>
              <span className="link">Last time</span>
            </div>
          </div>
          <div className="links">
            <h5 className="link_title">Resources</h5>
            <div className="list_box">
              <span className="link">Resource</span>
              <span className="link">Resource name</span>
              <span className="link">Another resource</span>
              <span className="link">Final resource</span>
            </div>
          </div>
          <div className="links">
            <h5 className="link_title">About</h5>
            <div className="list_box">
              <span className="link">Team</span>
              <span className="link">Locations</span>
              <span className="link">Privacy</span>
              <span className="link">Terms</span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;


