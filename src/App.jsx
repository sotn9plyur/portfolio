import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import ForU from "./components/ForU/ForU.jsx";
import Can from "./components/Can/Can.jsx";
import Advantages from "./components/Advantages/Advantages.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HeroGrid from "./components/HeroGrid/HeroGrid.jsx";
import "./App.css";

// "Мой подход к работе" is parked, not deleted — the component still lives in
// components/Steps. Restore the import and the <Steps /> tag below to bring it back.
// import Steps from './components/Steps/Steps.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main className="page">
        {/* one mesh spanning the top of the page, not a per-section decoration */}
        <HeroGrid className="page__grid" cell={100} />

        <Hero />
        <About />
        <ForU />
        <Can />
        <Advantages />
        {/* <Steps /> */}
      </main>
      <Footer />
    </>
  );
}
