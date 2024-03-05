const Header: React.FC = () => {
  return (
    <header itemScope itemType="http://schema.org/WPHeader">
      <nav>
        <a href="#top" className="headerlogo">
          <picture
            itemProp="image"
            itemScope
            itemType="http://schema.org/ImageObject"
          >
            <img
              title="Stilisiertes N für Niedermeier"
              alt="Stilisiertes N für Niedermeier"
              src="favicon.svg"
            />
          </picture>
          <h1>Tim Niedermeier</h1>
        </a>
        <ol className="headernav">
          <li>
            <a href="#projects">Projekte</a>
          </li>
          <li>
            <a href="#cv">Lebenslauf</a>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
