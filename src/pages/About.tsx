import NavBar from "../components/NavBar";
import TechIcons from "../components/TechIcons";
import dev from "../assets/Software-Developer.svg";
import { Tech } from "../assets/tech";
import { useEffect, useState } from "react";

const About = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    setAge(calculateAge());
  }, []);

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date("2007-03-30");
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <main>
      <NavBar type='content' />
      <section className='content horizontal-container'>
        <div className='left'>
          <article className='enter-left'>
            <h2>About Me</h2>
            <hr />
            <span>
              Hello, my name is <b>Maksim Straus</b>, I go by <b>cqb13</b>, I’m
              a {age} year old, self-taught,
              <b> web developer</b>. I excel at building websites that work well
              on smartphones, tablets, and desktops.
              <br />
              <br />I have been programming for about 5 years now, and have
              learned many languages and frameworks. I started off learning{" "}
              <b>Python</b>, then after I becoming interested in Minecraft
              modding I learned <b>Java</b>. I learned a few more languages such
              as <b>C++</b> for game dev, but I never really got into them. But
              after taking a CS class in high school I became interested in web
              development, I learned <b>HTML</b> and <b>CSS</b> and then moved
              on to <b>Javascript</b> and <b>Typescript</b>. I am currently
              learning <b>Rust</b>.
            </span>
          </article>
          <br />
          <article className='enter-left'>
            <h2>My Skills</h2>
            <hr />
            <span>
              I use <b>vscode</b> as my main editor, but I also often use{" "}
              <b>IntelliJ</b>. My framework of choice is
              <b> React</b>, however I also have experience with <b>Vue</b>.
              <br />
              <br /> <b>Javascript</b> and <b>Typescript</b> are my main
              languages, for both frontend and backend. For styling I mainly use
              tailwind css . I have not delved too deep into backend
              development, but I some experience with <b>Node.js</b>, and{" "}
              <b>Rust</b>, and I am proficient with <b>Firebase</b> which I use
              for authentication, and databases, I am also learning <b>SQL</b>.
            </span>
            <TechIcons techs={Object.values(Tech)} />
          </article>
        </div>
        <div className='right'>
          <img src={dev} alt='cool pic' />
        </div>
      </section>
    </main>
  );
};

export default About;
