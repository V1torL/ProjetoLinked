import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from './style';

// Página do painel administrativo
export default function Admin() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Carrega as mensagens armazenadas no localStorage
    const loadMessages = () => {
      const storedMessages = localStorage.getItem('contato_mensagens');
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      }
      setIsLoading(false);
    };
    loadMessages();
  }, []);

  // Função para deletar uma mensagem
  const deleteMessage = (index) => {
    // Filtra as mensagens para remover a que foi deletada
    const newMessages = messages.filter((_, i) => i !== index);
    // Atualiza o localStorage com as mensagens restantes
    localStorage.setItem('contato_mensagens', JSON.stringify(newMessages));
    // Atualiza o estado com as mensagens restantes
    setMessages(newMessages);
  };

  // Função para voltar à página inicial
  const handleGoHome = () => {
    navigate('/');
  };

  // Se a página estiver carregando, exibe uma mensagem
  if (isLoading) {
    return <div style={styles.loading}>Carregando mensagens...</div>;
  }

  // Renderiza a página com as mensagens
  return (
    <div style={styles.adminContainer}>
      <div style={styles.header}>
        <h1 style={styles.title}>Painel Admin</h1>
        <button 
          onClick={handleGoHome}
          style={styles.homeButton}
        >
          Voltar à Página Inicial
        </button>
      </div>
      
      {messages.length === 0 ? (
        // Se não houver nenhuma mensagem, exibe uma mensagem
        <p style={styles.noMessages}>Nenhuma mensagem recebida ainda.</p>
      ) : (
        // Renderiza as mensagens em uma grid
        <div style={styles.messagesGrid}>
          {messages.map((message, index) => (
            <div key={index} style={styles.messageCard}>
              <div style={styles.messageHeader}>
                <h3>{message.assunto}</h3>
                <button 
                  onClick={() => deleteMessage(index)}
                  style={styles.deleteButton}
                >
                  ×
                </button>
              </div>
              <div style={styles.messageBody}>
                <p><strong>De:</strong> {message.nome}</p>
                <p><strong>Email:</strong> {message.email}</p>
                <p><strong>Data:</strong> {message.data}</p>
                <div>
                  <p>{message.mensagem}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
