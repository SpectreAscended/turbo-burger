import './footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        Created by{' '}
        <a
          href="https://spectreascended.github.io/personalhomepage/"
          target="_blank"
          rel="noreferrer noopenner"
        >
          Cory Pollard
        </a>
      </p>
      <p>&copy; 2023</p>
    </footer>
  );
};

export default Footer;
