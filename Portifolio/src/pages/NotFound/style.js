export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center -50px',
    minHeight: '100vh',
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
    marginBottom: '2rem',
  },
  homeButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#2c3e50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#2980b9',
    },
  },
};