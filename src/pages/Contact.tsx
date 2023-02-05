import NavBar from "../components/navigation/NavBar";

const Contact = () => {
  return (
    <main>
      <NavBar type='content' />
      <div className='contact'>
        <h2>Drop by my discord:</h2>
        <a href='https://discord.gg/TtmQs7BzPJ'>discord.gg/TtmQs7BzPJ</a>
        <sub>cqb13#8875</sub>
      </div>
      <div className='contact'>
        <h2>Check out my GitHub</h2>
        <a href='https://github.com/cqb13'>github.com/cqb13</a>
      </div>
    </main>
  );
};

export default Contact;
