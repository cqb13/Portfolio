import NavBar from "../components/navigation/NavBar";
import TechIcons from "../components/tech/TechIcons";
import { Tech } from "../assets/tech";

const About = () => {
  return (
    <main>
      <NavBar type='content' />
      <section className='content'>
        <article className='enter-left'>
          <h2>About Me</h2>
          <hr />
          <span>
            Hello, I go by <b>cqb13</b>, I’m a 15 year old, self-taught,
            aspiring <b>web developer</b>. I excel at building simple websites
            that work well on smartphones, tablets, and desktops. I am always
            working on improving and expanding my skills.
            <br />
            <br />I have been programming for about 4 years now, and have
            learned many languages and frameworks. I started off learning{" "}
            <b>Python</b> for fun, then after I became interested in Minecraft
            modding I learned <b>Java</b>, I learned a few more languages such
            as <b>C++</b> for game dev but I never really got into them. But
            after taking a CS class in high school I became interested in web
            development, and learned <b>HTML</b> and <b>CSS</b> and then moved
            on to <b>Javascript</b>, I am currently learning <b>Typescript</b>.
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
            languages, for both frontend and backend. For styling I currently
            use vanilla CSS, but I am learning SCSS and Tailwind. I have not
            delved too deep into backend development, I some experience with{" "}
            <b>Node.js</b>, and I am proficient with <b>Firebase</b> which I use
            for hosting, authentication, and database, I am also learning{" "}
            <b>Mongo DB</b>.
          </span>
          <TechIcons techs={Object.values(Tech)} />
        </article>
      </section>
    </main>
  );
};

export default About;
