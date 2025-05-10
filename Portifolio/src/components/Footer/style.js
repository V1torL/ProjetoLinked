export const footerStyles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '2rem 0',
    marginTop: '2rem',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  brandSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  logo: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginBottom: '0.5rem',
  },
  tagline: {
    color: '#ecf0f1',
    fontSize: '0.9rem',
    maxWidth: '500px',
  },
  bottomSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  copyright: {
    color: '#bdc3c7',
    fontSize: '0.8rem',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: '#bdc3c7',
    fontSize: '0.8rem',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#3498db',
    },
  },
};