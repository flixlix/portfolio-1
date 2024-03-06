const Header: React.FC = () => {
  return (
    <header itemScope itemType="http://schema.org/WPHeader">
      <nav>
        <a href="#top" className="headerlogo" itemProp="url">
          <picture
            itemProp="image"
            itemScope
            itemType="http://schema.org/ImageObject"
          >
            <svg
              title="Stilisiertes N für Niedermeier"
              alt="Tim Niedermeier Logo"
              viewBox="0 0 428 428"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.82843 50.828C4.30857 48.3082 0 50.0928 0 53.6565V424C0 426.209 1.79087 428 4.00001 428H56C58.2091 428 60 426.209 60 424V205.656C60 202.093 64.3086 200.308 66.8284 202.828L290.828 426.828C291.579 427.578 292.596 428 293.657 428H374.343C377.907 428 379.691 423.691 377.172 421.171L6.82843 50.828Z"
                fill="var(--primary-color)"
              />
              <path
                d="M421.171 369.172C423.691 371.691 428 369.907 428 366.343V4C428 1.79086 426.209 0 424 0H372C369.79 0 368 1.79086 368 4V222.343C368 225.907 363.691 227.691 361.171 225.172L137.171 1.17157C136.421 0.421428 135.404 0 134.343 0H61.6565C58.0928 0 56.3082 4.30856 58.828 6.82842L421.171 369.172Z"
                fill="var(--primary-color)"
              />
            </svg>
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
