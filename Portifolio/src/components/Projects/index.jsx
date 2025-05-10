import { projectStyles } from './style';

// Essa função retorna um componente que renderiza a sessão de projetos
export default function Projects() {
  // Array de objetos que representam os projetos
  const projects = [
    {
      title: 'FutStats',
      description: 'Uma plataforma que mostra a tabela do brasileirão e o usuário pode simular resultados.',
      technologies: ['Quasar', 'Vue.js', 'Banco de Dados'],
    },
    {
      title: 'Easy Market',
      description: 'Site Web para controlar suas comprar no mercado, com uso do QR-Code da nota fiscal.',
      technologies: ['React', 'Vue.js', 'MongoDB'],
    },
    {
      title: 'Compilador',
      description: 'O projeto consiste na compilação de códigos de uma linguagem especifica.',
      technologies: ['Python'],
    }
  ];

  return (
    <section id="projects" style={projectStyles.section}>
      <div>
        {/* Cabeçalho da sessão*/}
        <header style={projectStyles.header}>
          <h2 style={projectStyles.title}>Meus <span style={projectStyles.highlight}>Projetos</span></h2>
          <p style={projectStyles.subtitle}>Estes são alguns projetos que foram desenvolvidos ao longo da minha carreira.</p>
        </header>

        {/* Container que renderiza os projetos */}
        <div style={projectStyles.projectsContainer}>
          {projects.map((project) => (
            <div key={project.title} style={projectStyles.projectCard}>
              <div>
                <h3 style={projectStyles.projectTitle}>{project.title}</h3>
                <p style={projectStyles.projectDescription}>{project.description}</p>

                {/* Renderiza as tecnologias usadas no projeto */}
                <ul style={projectStyles.techList}>
                  {project.technologies.map((tech) => (
                    <li key={tech} style={projectStyles.techItem}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/*Link para o GitHub*/}
        <div style={projectStyles.linkContainer}>
          <a href="https://github.com/V1torL" style={projectStyles.link}>
            Ver todos os projetos no GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

