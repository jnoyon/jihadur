import About from "./components/About";
import FooterNav from "./components/FooterNav";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div>
      <Hero></Hero>
      <FooterNav></FooterNav>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
    </div>
  )
}
