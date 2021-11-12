import Style from "./Style.module.css";

const Header = () => {
  return (
    <header className={Style.cabezal}>
      <h1 className={Style.titulo}>
        <a href="#">Vorágine Voráz</a>
      </h1>
      <p className={Style.subtitulo}>Escritura y coso</p>
    </header>
  );
};

export default Header;
