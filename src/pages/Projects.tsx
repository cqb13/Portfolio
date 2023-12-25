import ProjectCards from "../components/ProjectCards";
import NavBar from "../components/NavBar";

const Projects = () => {
  return (
    <main>
      <NavBar type='content' />
      <section className='content vertical-container'>
        <ProjectCards type='main' />
      </section>
      <section className='content divider'>
        <h2>More of my work</h2>
        <hr />
      </section>
      <section className='content cards'>
        <ProjectCards type='other' />
      </section>
      <sub>
        Find more on my github:{" "}
        <a href='https://github.com/cqb13'>https://github.com/cqb13</a>
      </sub>
    </main>
  );
};

export default Projects;
