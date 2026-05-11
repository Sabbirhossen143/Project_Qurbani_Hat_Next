import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import QurbaniTips from "../components/QurbaniTips";
import TopBreeds from "../components/TopBreeds";
import About from "../components/About";
import Contact from "../components/Contact";


const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <TopBreeds />
      <QurbaniTips />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;