export const headerStyles = {
  header: {
    backgroundColor: '#2c3e50',
    padding: 0,
    position: 'sticky',
    top: '0',
    zIndex: 100,
    width: '100%',
  },
  container: {
    width: '100%',
    padding: '0.7rem 4rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#3498db',
    },
  },
};
