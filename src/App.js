// import React, { useEffect } from 'react';
import React from "react";
import "./App.css";
// import { applyStyles } from './functions';

function App() {
  // useEffect(() => {
  //   applyStyles();
  // }, []);
  const cards = [
    {
      id : 0,
      title: "Free",
      price: 0,
      unit: " / mo",
      users: "10",
      storage: "2",
      support: "Email",
      buttonText: "Sign up for free",
      buttonstyle: "outlined",
    },
    {
      id : 1,
      title: "Pro",
      price: 15,
      unit: " / mo",
      users: "20",
      storage: "10",
      support: "Priority email",
      buttonText: "Get started",
      buttonstyle: "filled",
    },
    {
      id : 2,
      title: "Enterprise",
      price: 29,
      unit: " / mo",
      users: "30",
      storage: "15",
      support: "Phone and email",
      buttonText: "Contact us",
      buttonstyle: "filled",
    },
  ];

  const Card = ({
    id,
    title,
    price,
    users,
    storage,
    support,
    buttonText,
    buttonstyle,
  }) => {
    const increase = () =>{
      price++;
      const temp_price = document.getElementsByClassName("card_price");
      temp_price[id].textContent = '${price}';
    }
    
    return (
      <div className="card_body">
        <h5 className="card_title">{title}</h5>
        <div className="card_main">
          <div className="card_price_unit">
            <h2 className="card_price">${price}</h2>
            <h2 className="unit"> / mo</h2>
          </div>
          <div className="list_container">
            <span className="user list">{users} users included</span>
            <span className="storage list">{storage} GB of storage</span>
            <span className="support list">{support} support</span>
            <span className="helpCenter list">Help center access</span>
          </div>
          <button
            className="card_botton"
            style={
              buttonstyle === "outlined"
                ? { background: "white", color: "blue" }
                : { background: "blue", color: "white" }
            }
            onclick ={increase}
            // onClick={()=>{
            //   const temp_button = document.getElementsByClassName('card_botton');
            //   const temp_price = document.getElementsByClassName('card_price');
            //   if(temp_button[0]):

            //   console.log(cards.price)}}
            >
            {buttonText}
          </button>
        </div>
      </div>
    );
    // const temp_button = document.getElementsByTagName('button');
    // let temp_price = document.getElementsByClassName('card_price');
    // temp_button[0].onclick=(temp_price[0].text = this.price++)
  };
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
          <Card className="card" {...card} /> //함수는 태그화 가능 매개변수는 {}로 넣는다.
        ))}
      </div>

      <div className="footer_container">
        <div className="image_container">
          <img
            className="image"
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt="B"
            width="24"
            height="24"
          />
          <br></br>
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

//export function applyStyles() {
//   const cardBtns = document.querySelectorAll('.card_main .card_botton');
// //
//   cardBtns.forEach((btn, i) => {
//     if (i=== 0) {
//       btn.style.backgroundColor = 'rgb(255, 255, 255)';
//       btn.style.color = 'rgb(0,123,255)';
//     } else{
//       btn.style.backgroundColor = 'rgb(0,123,255)';
//       btn.style.color = 'white';
//     }
//   });
// }
