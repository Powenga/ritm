import "../../styles/section.scss";
import "./Dev.scss";
import Stages from "./Stages/Stages";
import Business from "./Business/Business";
import Tools from "./Tools/Tools";

const Dev = () => {
  return (
    <section className="section dev">
      <div className="section__wrapper">
        <h2 className="section__title">Пример развития экосистемы</h2>
        <Stages />
        <Business />
      </div>
      <Tools />
    </section>
  );
};

export default Dev;
