import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NavBar = ({ type }: { type: "homepage" | "content" }) => {
  const location = useLocation();

  useEffect(() => {
    const links = document.querySelectorAll(".switch-page");
    links.forEach((link) => {
      link.classList.remove("on-page");
    });
    const currentPage = document.querySelector(
      `.switch-page[href='${location.pathname}']`
    );
    currentPage?.classList.add("on-page");
  }, []);

  return (
    <nav className={type == "content" ? "nav-bar" : ""}>
      {type == "content" ? (
        <section className='left'>
          <Link to='/' className='switch-page'>
            Home
          </Link>
        </section>
      ) : null}
      <section className={type == "content" ? "right" : "page-view"}>
        <Link to='/about' className='switch-page'>
          About Me
        </Link>
        <Link to='/projects' className='switch-page'>
          Projects
        </Link>
        <Link to='/contact' className='switch-page'>
          Contact
        </Link>
      </section>
    </nav>
  );
};

export default NavBar;
