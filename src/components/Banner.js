export default function Banner() {
  return (
    <div className="banner">
      <h2 className="banner__title">a</h2>
      <p className="banner__subtitle" data-text="Desarrollador">
        Desarrollador
      </p>
      <div className="banner__contacto">
        <a className="red-social">
          <i className="fab fa-facebook"></i>
        </a>
        <a className="red-social">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a className="red-social">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="banner__abajo" id="banner-btn"></div>
    </div>
  );
}
