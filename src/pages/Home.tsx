import NavBar from "../components/NavBar";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <main>
      <img src={logo} alt='logo' className='large-logo zoom-in' />
      <section className='name-display'>
        <h1 className='zoom-in'>Hi, i'm </h1>
        <h1 className='accented-text zoom-in'>cqb13</h1>
      </section>
      <sub className="zoom-in">Web-Developer</sub>
      <NavBar type='homepage' />
    </main>
  );
};

export default Home;
