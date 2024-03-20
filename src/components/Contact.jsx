import React from "react";
import Image from '../assets/banner.png';
import "../styles/Contact.css";
function Contact() {
  return (
    <div className="mainContact">
      <div
        className="leftSide"
      >
        <img src= {Image} />
      </div>

      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadnınızı giriniz..."
          />
          <label>e-Mail</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen e-mailinizi giriniz.."
          />
          <label >Mesajınız</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Lütfen mesajınızı giriniz"
          ></textarea>
          <button>Gönder</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
