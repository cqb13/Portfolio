import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import emailjs from "emailjs-com";

const Contact = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatusMessage("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [statusMessage]);

  const sendMessage = async () => {
    if (firstName === "") {
      setStatusMessage("Please enter your first name.");
      return;
    }

    if (lastName === "") {
      setStatusMessage("Please enter your last name.");
      return;
    }

    if (emailAddress === "") {
      setStatusMessage("Please enter your email address.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(emailAddress)) {
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    if (message === "") {
      setStatusMessage("Please enter a message.");
      return;
    }

    try {
      const serviceID = import.meta.env
        .VITE_REACT_APP_VERCEL_ENV_EMAIL_SERVICE_ID;
      const templateID = import.meta.env
        .VITE_REACT_APP_VERCEL_ENV_EMAIL_TEMPLATE_ID;
      const userID = import.meta.env.VITE_REACT_APP_VERCEL_ENV_EMAIL_USER_ID;

      if (!serviceID || !templateID || !userID) {
        setStatusMessage("Failed to load information.");
        return;
      }

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: `${firstName} ${lastName}`,
          from_email: `${emailAddress}`,
          message: `${message}`
        },
        userID
      );
      setStatusMessage("Message sent!");
    } catch (e) {
      console.error(e);
      setStatusMessage("Failed to send message.");
      return;
    }

    setFirstName("");
    setLastName("");
    setEmailAddress("");
    setMessage("");
  };

  return (
    <main>
      <NavBar type='content' />
      <section className='contact-form'>
        <div>
          <div className='contact'>
            <h2>Send me an email</h2>
            <a href='mailto:cqb13.dev@gmail.com'>cqb13.dev@gmail.com</a>
          </div>
        </div>
        <section>
          <input
            type='text'
            value={firstName}
            placeholder='Enter first name...'
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            type='text'
            value={lastName}
            placeholder='Enter last name...'
            onChange={(event) => setLastName(event.target.value)}
          />
        </section>
        <input
          type='email'
          value={emailAddress}
          placeholder='Enter email...'
          onChange={(event) => setEmailAddress(event.target.value)}
        />
        <textarea
          value={message}
          placeholder='Enter message...'
          cols={30}
          rows={10}
          onChange={(event) => setMessage(event.target.value)}
        />
        <input type='button' value='Send Message' onClick={sendMessage} />
      </section>
      {statusMessage != "" ? (
        <section className='notification'>
          <p>{statusMessage}</p>
        </section>
      ) : null}
    </main>
  );
};

export default Contact;
