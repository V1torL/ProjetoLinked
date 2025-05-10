export const projectStyles = {
    section: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '4rem 2rem',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    title: {
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '0.5rem'
    },
    highlight: {
      color: '#2c3e50',
      fontWeight: 'bold'
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#666'
    },
    projectsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem'
    },
    projectCard: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1.5rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)'
      }
    },
    projectTitle: {
      fontSize: '1.5rem',
      color: '#2c3e50',
      marginBottom: '1rem'
    },
    projectDescription: {
      color: '#555',
      marginBottom: '1.5rem',
      lineHeight: '1.6'
    },
    techList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      listStyle: 'none',
      padding: 0
    },
    techItem: {
      backgroundColor: '#f0f0f0',
      padding: '0.3rem 0.8rem',
      borderRadius: '20px',
      fontSize: '0.9rem',
      color: '#333'
    },
    linkContainer: {
      textAlign: 'center'
    },
    link: {
      display: 'inline-block',
      color: '#2c3e50',
      fontWeight: 'bold',
      textDecoration: 'none',
      borderBottom: '2px solid #2c3e50',
      paddingBottom: '0.3rem',
      transition: 'color 0.3s ease',
      '&:hover': {
        color: '#3498db',
        borderBottomColor: '#3498db'
      }
    }
  };