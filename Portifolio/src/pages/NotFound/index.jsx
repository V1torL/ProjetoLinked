import { styles } from './style';
import { useNavigate } from 'react-router-dom';

// Funcao de pagina não encontrada
export default function NotFound() {
  const navigate = useNavigate();

  // Funcao que direciona para a pagina inicial
  const handleGoHome = () => {
    navigate('/');
  };

  // Retorna que não encontrou a pagina e o botao para voltar para a pagina inicial
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Página não encontrada</h2>
      <p style={styles.text}>O conteúdo que você procura não existe.</p>
      <button 
        onClick={handleGoHome} 
        style={styles.homeButton}
      >
        Voltar para a página inicial
      </button>
    </div>
  );
}
