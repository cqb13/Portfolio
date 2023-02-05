import NavBar from "../components/navigation/NavBar";
import ProjectCards from "../components/projectCards/ProjectCards";

const Projects = () => {
  return (
    <main>
      <NavBar type='content' />
      <ProjectCards />
      <sub>
        Find more on my github:{" "}
        <a href='https://github.com/cqb13'>https://github.com/cqb13</a>
      </sub>
    </main>
  );
};

export default Projects;
