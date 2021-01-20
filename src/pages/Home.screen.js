import Banner from '../components/Banner';
import Section from '../components/Section';

export default function Home() {
  return (
    <>
      <Banner />
      <Section
        imagen="arroyo.jpg"
        titulo="Diseño web"
        contenido={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos veniam, eaque, commodi nesciunt quaerat, repellat ullam nam sequi praesentium consectetur consequatur dolorem quibusdam deleniti eveniet fuga minus voluptates eos tempora?`}
      />
    </>
  );
}
