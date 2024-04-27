import React from "react";
import { getImageUrl } from "../../utils";
import { contacts } from "../../data/contact";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="outer-container" id="contact">
      {" "}
      <h1>Contact</h1>
      <div className="contact-container">
        <div className="Contact-Logo">
          <p>Feel free to Contact!</p>
        </div>

        <div className="contact-info">
          <ul className="info">
            {contacts.map((item, id) => {
              return (
                <li key={id} className="info-details">
                  <img className="contact-img"
                    src={getImageUrl(item.imageUrl)}
                    alt={"image" + id}
                  ></img>{" "}
                  <a href={item.link}><p>{item.info}</p></a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
