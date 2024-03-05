function Contact() {
  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">
            Contact
          </span>
          <div className="heading-sec__sub heading-sec__sub--lt">
            <form
              action="https://formsubmit.co/elizabethlankford1@gmail.com"
              method="POST"
            >
              <label>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name..."
                required
              />
              <label>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email..."
                required
              />
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="phone number..."
              />
              <label>Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="message..."
              ></textarea>
              <input type="hidden" name="_captcha" value="false"></input>
              <input
                type="hidden"
                name="_next"
                value="https://elizabeth-lankford.com/#contact/thanks.html"
              ></input>
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
