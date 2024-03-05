import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/elizabethlankford1@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">
            Contact
          </span>
          <div className="heading-sec__sub heading-sec__sub--lt">
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name..."
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="phone number..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label>Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button className="btn--bg btn" type="submit">
                Send
              </button>
            </form>
          </div>
        </h2>
      </div>
    </section>
  );
}
export default Contact;
