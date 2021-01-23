import { useEffect, useRef, useState } from 'react';
import Banner from '../components/Banner';
//import Section from '../components/Section';

function IntersectionObs(clase) {
  const anim = document.querySelectorAll(`.${clase}`);
  console.log(anim);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add(entry.target.dataset.direction);
        entry.target.style.animation = `${entry.target.dataset.direction} 1s ease-out`;
      } else {
        entry.target.style.animation = 'none';
      }
    });
  });
  anim.forEach((animation) => {
    observer.observe(animation);
  });
}

function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  const targetPosition = targetElement.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = fluidAnimation(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  function fluidAnimation(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }
  requestAnimationFrame(animation);
}

function useLazyLoading({ elementRef }) {
  const [isNearScreen, setShow] = useState(false);
  useEffect(() => {
    let observer;
    const onChange = (entries, observer) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };
    Promise.resolve(
      typeof IntersectionObserver === 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: '10px',
      });
      observer.observe(elementRef.current);
    });
    return () => observer && observer.disconnect();
  });
  return isNearScreen;
}

export default function Home() {
  useEffect(() => {
    const btn = document.getElementById('banner-btn');
    btn.addEventListener('click', () => {
      smoothScroll('.container', 1000);
    });
    IntersectionObs('animation');
    return () => btn.removeEventListener('click', smoothScroll);
  }, []);
  const elementRef = useRef();
  const isNearScreen = useLazyLoading({ elementRef });
  return (
    <>
      <Banner />
      <section className="container">
        <div className="info">
          <div className="info__texto">
            <h2
              className="info__texto-subtitle animation"
              data-delay="0s"
              data-direction="left-to-right"
              data-content="Acerca de"
              id="a"
            >
              Acerca de
            </h2>
            <h3
              className="info__texto-title animation"
              data-direction="top-to-bottom"
            >
              Me presento...
            </h3>
            <p
              className="info__texto-info animation"
              data-delay="1s"
              data-direction="right-to-left"
            >
              ¡Hola! Soy Javier Zetina, estudiante y desarrollador web
              freelance, me dedico a ello desde mediados de 2020. Disfruto de lo
              que hago y, tengo una gran facilidad para adquirir conocimeintos
              nuevos.
            </p>
            <button className="info__texto-btn">Leer más</button>
          </div>
          <div className="info__imagen" ref={elementRef}>
            {isNearScreen && (
              <div
                className="info__imagen-img animation"
                data-direction="right-to-left"
              ></div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
