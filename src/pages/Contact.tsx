import NavBar from "../components/navigation/NavBar";

const Contact = () => {
  return (
    <main>
      <NavBar type='content' />
      <div className='contact'>
        <h2>Send me an email</h2>
        <a href='mailto:cqb13.main@gmail.com'>cqb13.main@gmail.com</a>
      </div>
      <div className='contact'>
        <h2>Drop by my discord</h2>
        <a href='https://discord.gg/TtmQs7BzPJ' target="_blank">discord.gg/TtmQs7BzPJ</a>
        <sub>cqb13#8875</sub>
      </div>
      <div className="contact">
        <h2>Stop by my YouTube</h2>
        <a href='https://www.youtube.com/channel/UC3-m7_DPVMmJtUBC8rOh3Dw' target="_blank">youtube.com/cqb13</a>
      </div>
      <div className='contact'>
        <h2>Check out my GitHub</h2>
        <a href='https://github.com/cqb13' target="_blank">github.com/cqb13</a>
      </div>
    </main>
  );
};

export default Contact;
