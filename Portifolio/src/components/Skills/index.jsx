import { skillsStyles } from './style';

// Componente de habilidades que retorna as habilidades técnicas e profissionais
export default function Skills() {
  // Habilidades Técnicas
  const technicalSkills = [
    { name: 'Linguagem C', level: 90 },
    { name: 'Python', level: 90 },
    { name: 'React', level: 80 },
    { name: 'JavaScript/JSX', level: 75 },
    { name: 'Banco de Dados', level: 70 }
  ];
  // Habilidades Profissionais
  const professionalSkills = [
    {
      icon: '👥',
      title: 'Trabalho em Equipe',
      description: 'Experiência em equipes multidisciplinares',
      color: '#3b82f6'
    },
    {
      icon: '💬',
      title: 'Comunicação',
      description: 'Explicar as ideias técnicas de forma compreensível',
      color: '#8b5cf6'
    },
    {
      icon: '✅',
      title: 'Facilidade de Aprendizado',
      description: 'Aprender rapidamente como usar novas ferramentas',
      color: '#10b981'
    },
    {
      icon: '💡',
      title: 'Resolução de Problemas',
      description: 'Diagnosticar e corrigir problemas com eficiência',
      color: '#f59e0b'
    }
  ];

  return (
    <section id="skills" style={skillsStyles.section}>
      <div>
        {/* Titulo e subtitulo */}
        <header style={skillsStyles.header}>
          <h2 style={skillsStyles.title}>Minhas <span style={skillsStyles.highlight}>Habilidades</span></h2>
          <p style={skillsStyles.subtitle}>Conhecimentos técnicos e competências profissionais que foram desenvolvidos ao longo da minha carreira</p>
        </header>

        <div style={skillsStyles.skillsContainer}>
          {/* Habilidades Técnicas */}
          <div style={skillsStyles.skillCategory}>
            <h3 style={skillsStyles.categoryTitle}>Técnicas</h3>
            {technicalSkills.map((skill) => (
              <div key={skill.name} style={skillsStyles.technicalSkill}>
                <div style={skillsStyles.skillHeader}>
                  <span style={skillsStyles.skillName}>{skill.name}</span>
                  <span style={skillsStyles.skillLevel}>{skill.level}%</span>
                </div>
                <div style={skillsStyles.progressBar}>
                  <div 
                    style={{ 
                      ...skillsStyles.progressFill,
                      width: `${skill.level}%`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Habilidades Profissionais */}
          <div style={skillsStyles.skillCategory}>
            <h3 style={skillsStyles.categoryTitle}>Profissionais</h3>
            {professionalSkills.map((skill) => (
              <div key={skill.title} style={skillsStyles.professionalSkill}>
                <div style={{ 
                  ...skillsStyles.skillIcon,
                  backgroundColor: `${skill.color}20`,
                  color: skill.color
                }}>
                  {skill.icon}
                </div>
                <div style={skillsStyles.skillContent}>
                  <h4 style={skillsStyles.skillTitle}>{skill.title}</h4>
                  <p style={skillsStyles.skillDescription}>{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
