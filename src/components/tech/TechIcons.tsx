import type { Tech } from "../../assets/tech";
import tech from "../../assets/tech";

const TechIcons = ({ techs }: { techs: Tech[] }) => {
  return (
    <div className='tech-icons'>
      {techs.map((t, i) => (
        <div key={i}>
          <a target='_blank' rel='noreferrer' href={tech[t].url}>
            <img
              title={tech[t].title}
              src={tech[t].src}
              alt={tech[t].alt}
              className='icon'
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
