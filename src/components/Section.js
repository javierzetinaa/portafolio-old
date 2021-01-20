import { useEffect, useRef } from 'react';
export default function Section({
  imagen,
  titulo,
  contenido,
  color = 'blanco',
}) {
  const jarallaX = useRef(null);
  return (
    <section>
      <div className="box">
        <h2 data-jarallax-element="0 -200" className={color}>
          {titulo}
        </h2>
        <div className="container">
          <div className="jarallax img" ref={jarallaX}>
            <img
              src={`/assets/img/${imagen}`}
              alt="sa"
              className="jarallax-img"
            />
          </div>
          <div className="content" data-jarallax-element="-200 0">
            <p>{contenido}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
