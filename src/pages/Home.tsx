import NavBar from "../components/navigation/NavBar";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <main>
      <img src={logo} alt='logo' className='large-logo' />
      <section className='name-display'>
        <h1>Hi, i'm </h1>
        <h1 className='accented-text'>cqb13</h1>
      </section>
      <sub>Web-Developer</sub>
      <NavBar type='homepage' />
    </main>
  );
};

export default Home;
