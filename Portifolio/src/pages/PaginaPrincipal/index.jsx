import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

import { GlobalStyle } from '../../styles/globalStyle';

// Essa é a página principal do site
// Ela contém todos os componentes principais
export default function Home() {
  return (
    <> 
      {/* Estilizações globais do site */}
      <GlobalStyle />
      {/* Cabeçalho do site */}
      <Header />
      {/* Seção de hero com imagem e texto */}
      <Hero />
      {/* Seção de projetos */}
      <Projects />
      {/* Seção de habilidades */}
      <Skills />
      {/* Seção de contato */}
      <Contact />
      {/* Rodapé do site */}
      <Footer />
    </>
  );
}
