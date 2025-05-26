import React from 'react'

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#1e1e2f',
        color: '#ccc',
        textAlign: 'center',
        padding: '1rem',
        marginTop: '2rem',
        borderTop: '1px solid #444',

      };

      return (
        <footer style = {footerStyle}>
            <p>© 2022 Control de Estudiantes . Todos los derechos reservados by @Adan</p>
        </footer>
      );
};

export default Footer;