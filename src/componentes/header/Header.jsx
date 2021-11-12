import Style from "./Style.module.css";

const Header = () => {
  return (
    <header>
      <h1 className={Style.titulo}>
        <a href="#">Vorágine Voráz</a>
      </h1>
    </header>
  );
};

export default Header;
