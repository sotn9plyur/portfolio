import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import ForU from './components/ForU/ForU.jsx'
import Can from './components/Can/Can.jsx'
import Advantages from './components/Advantages/Advantages.jsx'
import Footer from './components/Footer/Footer.jsx'

// "Мой подход к работе" is parked, not deleted — the component still lives in
// components/Steps. Restore the import and the <Steps /> tag below to bring it back.
// import Steps from './components/Steps/Steps.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ForU />
        <Can />
        <Advantages />
        {/* <Steps /> */}
      </main>
      <Footer />
    </>
  )
}
