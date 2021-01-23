import { useEffect } from 'react';
export default function Section({
  imagen,
  titulo,
  contenido,
  color = 'blanco',
}) {
  useEffect(() => {
    const anim = document.querySelectorAll('.anim');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add(entry.target.dataset.direction);
          entry.target.style.animation = `${entry.target.dataset.direction} 2s ${entry.target.dataset.delay} forwards ease-out`;
        } else {
          entry.target.style.animation = 'none';
        }
      });
    });
    anim.forEach((animation) => {
      observer.observe(animation);
    });
  }, []);
  return (
    <section className="section">
      <div className="box">
        <h2
          data-delay="0s"
          data-direction="left-to-right"
          className={`${color} anim`}
        >
          {titulo}
        </h2>
        <div className="container">
          <div
            className="jarallax img anim"
            data-delay="0.3s"
            data-direction="right-to-left"
          >
            <img
              src={`/assets/img/${imagen}`}
              alt="sa"
              className="jarallax-img"
            />
          </div>
          <div
            className="content anim"
            data-delay="0.5s"
            data-direction="left-to-right"
          >
            <p>{contenido}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
