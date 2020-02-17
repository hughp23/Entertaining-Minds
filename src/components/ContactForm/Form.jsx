import React, { Component } from "react";
import { emailjs } from "emailjs";
import { sendEmail } from "../utils";

class Form extends Component {
  state = {
    result: "before"
  };
  render() {
    return (
      <div className="full-screen">
        <form id="contact-form">
          <h1>{this.state.result}</h1>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message"></textarea>
          <input type="button" value="Send" onClick={() => this._sendEmail()} />
        </form>
      </div>
    );
  }

  componentDidMount() {
    // document
    //   .getElementById("contact-form")
    //   .addEventListener("submit", function(event) {
    //     event.preventDefault();
    //     // generate the contact number value
    //     this.contact_number.value = (Math.random() * 100000) | 0;
    //     emailjs.sendForm("contact_service", "contact_template", this);
    //   });
  }

  _sendEmail = async () => {
    const result = await sendEmail();
    console.log(result, "result");
    this.setState({ result });
  };
}

export default Form;
