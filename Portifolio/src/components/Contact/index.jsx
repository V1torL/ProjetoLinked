import { useState } from 'react';
import { contactStyles } from './style';

// Componente de formulario de contato
export default function ContactForm() {
  // Estado para armazenar os dados do formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Função para atualizar o estado quando o usuario digita algo no formulario
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // Função para enviar o formulario e armazenar as mensagens no localStorage
  const handleSubmit = (e) => {
    e.preventDefault();

    // Carrega as mensagens armazenadas no localStorage
    const storedMessages = localStorage.getItem('contato_mensagens');
    const allMessages = storedMessages ? JSON.parse(storedMessages) : [];

    // Cria um novo objeto com os dados do formulario
    const newMessage = {
      nome: formData.name,
      email: formData.email,
      assunto: formData.subject,
      mensagem: formData.message,
      data: new Date().toLocaleString('pt-BR')
    };

    // Adiciona a nova mensagem ao array de mensagens
    allMessages.push(newMessage);
    localStorage.setItem('contato_mensagens', JSON.stringify(allMessages));

    // Reseta o formulario
    e.target.reset();
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" style={contactStyles.section}>
      <header style={contactStyles.header}>
        <h2 style={contactStyles.title}>Contato</h2>
        <p style={contactStyles.subtitle}>
          Quer bater um papo ou saber mais sobre meu trabalho? Entre em contato!
        </p>
      </header>

      <div style={contactStyles.wrapper}>
        <div style={contactStyles.formContainer}>
          <form onSubmit={handleSubmit} style={contactStyles.form}>
            {/* Input do nome */}
            <input
              type="text"
              id="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              required
              style={contactStyles.input}
            />

            {/* Input do email */}
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={contactStyles.input}
            />

            {/* Input do assunto */}
            <input
              type="text"
              id="subject"
              placeholder="Assunto"
              value={formData.subject}
              onChange={handleChange}
              required
              style={contactStyles.input}
            />

            {/* Input da mensagem */}
            <input
              type="text"
              id="message"
              placeholder="Mensagem"
              value={formData.message}
              onChange={handleChange}
              required
              style={contactStyles.inputMessage}
            />

            {/* Botão de enviar */}
            <button type="submit" style={contactStyles.button}>
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Informações de contato */}
        <div style={contactStyles.contactInfo}>
          <p style={contactStyles.telefoneContainer}>
            <strong>Telefone</strong><br />
            <a href="mailto:031982512052" style={contactStyles.telefoneLink}>
              +55 31 98251-2052
            </a>
          </p>
          <p style={contactStyles.emailContainer}>
            <strong>E-mail:</strong><br />
            <a href="mailto:vitorgalo2017@gmail.com" style={contactStyles.emailLink}>
              vitorgalo2017@gmail.com
            </a>
          </p>

          {/* Links para as redes profissionais */}
          <div style={contactStyles.linkGroup}>
            <p style={contactStyles.redesTitulo}>
              <strong>Redes Profissionais:</strong>
            </p>

            <div style={contactStyles.linkIcons}>
              <a href="https://www.linkedin.com/in/vitor-luiz-reis-do-carmo-631340265/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={contactStyles.icon} />
              </a>
              <a href="https://github.com/V1torL" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/128/25/25231.png" alt="GitHub" style={contactStyles.icon} />
              </a>
              <a href="https://www.instagram.com/vitorluiz.18/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="instagram" style={contactStyles.icon} />
              </a>
              <a href="https://x.com/VtorLuiz4" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" alt="X" style={contactStyles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

