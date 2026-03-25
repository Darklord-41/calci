import { FaCode, FaGithub } from 'react-icons/fa';

const Watermark = () => {
  return (
    <a 
      href="https://github.com/anshdhariwal" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        opacity: 0.6,
        fontSize: '0.8rem',
        fontFamily: 'monospace',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'var(--text-color)',
        textDecoration: 'none',
        background: 'var(--surface)',
        padding: '5px 10px',
        borderRadius: '20px',
        border: '1px solid var(--glass-border)'
      }}
    >
      <FaCode /> Dev @anshdhariwal <FaGithub />
    </a>
  );
};

export default Watermark;
