import Style from "./Style.module.css";

const Main = () => {
  return (
    <main className={Style.cuerpo}>
      {/* hardcodeado para ver qué onda */}
      <p className={Style.placeholder}>Main</p>
      <p className={Style.placeholder}>Main</p>
      <p className={Style.placeholder}>Main</p>
    </main>
  );
};

export default Main;
