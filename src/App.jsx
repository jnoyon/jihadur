import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import FooterNav from "./components/FooterNav";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <FooterNav></FooterNav>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Experience />
      <Footer></Footer>
    </div>
  )
}
