import { footerStyles } from './style';

// Componente de rodapé do site
export default function Footer() {
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.container}>
        <div style={footerStyles.content}>
          {/* Seção da marca */}
          <div style={footerStyles.brandSection}>
            {/* Link para a home */}
            <a href="/" style={footerStyles.logo}>Portfólio</a>
            {/* Slogan */}
            <p style={footerStyles.tagline}>Vamos desenvolver juntos soluções digitais inovadoras!</p>
          </div>
          
          {/* Seção de links */}
          <div style={footerStyles.bottomSection}>
            {/* Copyright */}
            <p style={footerStyles.copyright}>© {new Date().getFullYear()} Vitor Luiz. Todos os direitos reservados.</p>
            
            {/* Links para as políticas de privacidade e termos de serviço */}
            <div style={footerStyles.links}>
              <a 
                href="https://policies.google.com/privacy?hl=pt-BR" 
                style={footerStyles.link}
                target="_blank" 
                rel="noopener noreferrer"
              >
                Política de Privacidade
              </a>
              <a 
                href="https://policies.google.com/terms?hl=pt-BR" 
                style={footerStyles.link}
                target="_blank" 
                rel="noopener noreferrer"
              >
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
