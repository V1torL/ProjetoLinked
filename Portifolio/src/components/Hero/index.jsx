import FotoPerfil from '../../assets/FotoPerfil.jpeg';
import { heroStyles } from './style';

// Componente Hero, responsável por apresentar a seção de boas-vindas
export default function Hero() {
  return (
    <section id="home" style={heroStyles.section}>
      {/* Container de texto */}
      <div style={heroStyles.textContainer}>
        {/* Header da seção */}
        <header>
          {/* Título da seção */}
          <h1 style={heroStyles.title}>
            Olá, eu sou <span style={heroStyles.highlight}>Vitor Luiz</span>
          </h1>

          {/* Subtítulo da seção */}
          <h2 style={heroStyles.subtitle}>Desenvolvedor</h2>

          {/* Parágrafo de apresentação */}
          <p style={heroStyles.paragraph}>
            Atualmente estou no 9º período do curso de Ciência da Computação na Universidade Federal de São João del-Rei (UFSJ).
            Ao longo da minha formação acadêmica, venho consolidando meu conhecimento nas diversas áreas da computação, com ênfase em desenvolvimento de software.
          </p>

          {/* Parágrafo de apresentação */}
          <p style={heroStyles.paragraph}>
            Atuo como Desenvolvedor Full Stack, o que me permite trabalhar tanto no front-end, com foco na criação de interfaces modernas e responsivas, quanto no back-end, garantindo a lógica de negócio, segurança e desempenho das aplicações.
            Tenho experiência com tecnologias como ReactJS, Node.js, CSS, JavaScript, além de conhecimento em banco de dados, APIs e boas práticas de desenvolvimento.
          </p>

          {/* Parágrafo de apresentação */}
          <p style={heroStyles.paragraph}>
            Sou apaixonado por resolver problemas, aprender novas tecnologias e transformar ideias em soluções reais.
            Busco constantemente desafios que me permitam crescer profissionalmente e contribuir com projetos de impacto.
          </p>
        </header>
      </div>

      {/* Container de imagem */}
      <div style={heroStyles.imageContainer}>
        {/* Imagem de perfil */}
        <img
          src={FotoPerfil}
          alt="Vitor Luiz - Desenvolvedor"
          style={heroStyles.image}
        />

        {/* Link para a seção de contato */}
        <div>
          <a href='#contact' style={heroStyles.availability}>Disponível para projetos</a>
        </div>
      </div>
    </section>
  );
}
