import { headerStyles } from './style';

/*Este componente é responsável por renderizar o header da aplicação, 
contendo o logotipo, menu de navegação e links para as diferentes seções.*/
export default function Header() {
  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.container}>
        {/* Logotipo da aplicação */}
        <a href="/" style={headerStyles.logo}>Portfólio</a>
        
        {/* Menu de navegação */}
        <nav style={headerStyles.nav}>
          {/* Link para a seção de projetos */}
          <a href="#projects" style={headerStyles.navLink}>Projetos</a>
          {/* Link para a seção de habilidades */}
          <a href="#skills" style={headerStyles.navLink}>Habilidades</a>
          {/* Link para a seção de contato */}
          <a href="#contact" style={headerStyles.navLink}>Contato</a>
        </nav>
      </div>
    </header>
  );
}

