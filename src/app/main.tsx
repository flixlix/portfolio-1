

const Main: React.FC = () => {
    return (
         <main >
  <section
    id="top"
    className="commonGrid grid1of4l"
    itemScope
    itemType="http://schema.org/Article"
  >
    <meta itemProp="name" content="Über mich - Tim Niedermeier" />
    <meta itemProp="genre" content="Personal Profile" />
    <article className="textContainer" itemProp="articleBody">
      <h2 itemProp="headline">Über mich</h2>
      <p>
        Mein Name ist Tim Niedermeier, ich bin Student mit Fokus auf
        <a
          href="https://de.wikipedia.org/wiki/Internet_der_Dinge"
          target="_blank"
        >
          Internet der Dinge 
        </a> - Gestaltung vernetzter Systeme
        , auch bekannt als "
        <a
          href="https://www.hfg-gmuend.de/studium/digital-product-design-and-development"
          target="_blank"
        >
          Digital Product Design and Development
        </a>
        ". Meine Expertise umfasst Webdesign, App-Design sowie Physical
        Computing. Was mich an IoT besonders fasziniert, ist die einzigartige
        Symbiose aus Technologie und Kreativität. Diese Kombination ermöglicht
        es, durch interdisziplinäre Zusammenarbeit interaktive und fesselnde
        Benutzererlebnisse zu schaffen.
      </p>
    </article>
    <article
      className="imageContainer"
      itemProp="image"
      itemScope
      itemType="http://schema.org/ImageObject"
    >
      <picture>
        <source srcSet="gallery/person/image.avif" type="image/avif" />
        <source srcSet="gallery/person/image.webp" type="image/webp" />
        <img
          src="gallery/person/image.jpg"
          title="Tim Niedermeier"
          alt="Portraitfoto von Tim Niedermeier"
          itemProp="contentUrl"
        />
      </picture>
    </article>
  </section>
  <section
    className="commonGrid grid1of4r"
    itemScope
    itemType="http://schema.org/Article"
  >
    <meta itemProp="name" content="Meine Expertise - Tim Niedermeier" />
    <meta itemProp="genre" content="Professional Skills" />
    <article className="textContainer" itemProp="articleBody">
      <h2 itemProp="headline">Meine Expertise</h2>
      <p>
        umfasst moderne Design-Tools wie Figma sowie Entwicklungsframeworks wie
        Next.js und React Native. Ich beherrsche HTML, CSS und JavaScript und
        lege großen Wert auf Lean Design. Diese Fähigkeiten setze ich ein, um
        Lösungen zu schaffen, die sowohl ästhetisch ansprechend als auch
        funktional effizient sind.
      </p>
    </article>
    <article
      className="imageContainer"
      itemProp="image"
      itemScope
      itemType="http://schema.org/ImageObject"
    >
      <picture>
        <source srcSet="gallery/expertise/image.avif" type="image/avif" />
        <source srcSet="gallery/expertise/image.webp" type="image/webp" />
        <img
          src="gallery/expertise/image.jpg"
          title="Meine Expertise"
          alt="Bild zur Darstellung meiner Expertise"
          loading="lazy"
          itemProp="contentUrl"
        />
      </picture>
    </article>
  </section>
  <section
    id="projects"
    className="commonGrid grid2o4left"
    itemScope
    itemType="http://schema.org/Article"
  >
    <meta itemProp="name" content="PowerPort - Tim Niedermeier" />
    <meta itemProp="genre" content="Technology and Lifestyle" />
    <article className="textContainer" itemProp="articleBody">
      <h2 itemProp="headline">PowerPort</h2>
      <p>
        In Kooperation mit
        <a href="https://www.festool.de">Festool</a> haben wir den
        multifunktionalen Akku-Systainer "PowerPort" entwickelt, der speziell
        auf die Anforderungen von Handwerkern abgestimmt ist. Dieses innovative
        Produkt dient sowohl als Transportbehälter als auch als Ladestation für
        Akkupacks und vereint Effizienz, Flexibilität und Sicherheit in einem
        kompakten, benutzerfreundlichen Design. Der PowerPort markiert einen
        bedeutenden Fortschritt im Werkzeugmanagement und verbessert durch die
        Vereinfachung von Arbeitsabläufen die Produktivität und Zufriedenheit am
        Arbeitsplatz. Dieses Projekt veranschaulicht die erfolgreiche Verbindung
        von traditionellem Handwerk und moderner Technologie und ebnet den Weg
        für zukünftige Innovationen in der Branche.
      </p>
    </article>
    <article
      className="imageContainer"
      itemProp="image"
      itemScope
      itemType="http://schema.org/ImageObject"
    >
      <picture>
        <source srcSet="gallery/powerport/image.avif" type="image/avif" />
        <source srcSet="gallery/powerport/image.webp" type="image/webp" />
        <img
          src="gallery/powerport/image.jpg"
          alt="Visualisierung des PowerPorts"
          title="Visualisierung des PowerPorts"
          loading="lazy"
          itemProp="contentUrl"
        />
      </picture>
    </article>
  </section>
  <section
    id="projects"
    className="commonGrid grid2o4right"
    itemScope
    itemType="http://schema.org/Article"
  >
    <meta itemProp="name" content="Wanderlust - Tim Niedermeier" />
    <meta itemProp="genre" content="Technology and Lifestyle" />
    <article className="textContainer" itemProp="articleBody">
      <h2 itemProp="headline">Wanderlust</h2>
      <p>
        Dieses Projekt entstand im Rahmen des Kurses "Design System Engineering"
        an der
        <a href="https://www.hfg-gmuend.de">Hochschule für Gestaltung</a> in
        Schwäbisch Gmünd unter der Leitung von
        <a href="https://de.linkedin.com/in/jan-hassel">Jan Hassel</a>. Unser
        Ziel war es, ein innovatives Design System zu entwickeln, das nicht nur
        theoretische Konzepte vermittelt, sondern auch praktische Anwendbarkeit
        in realen Projekten demonstriert. Wir wollten zeigen, wie Design-Systeme
        in der Entwicklung moderner Anwendungen effektiv eingesetzt werden
        können.
      </p>
    </article>
    <article
      className="imageContainer"
      itemProp="image"
      itemScope
      itemType="http://schema.org/ImageObject"
    >
      <picture>
        <source srcSet="gallery/wanderlust/image.avif" type="image/avif" />
        <source srcSet="gallery/wanderlust/image.webp" type="image/webp" />
        <img
          src="gallery/wanderlust/image.jpg"
          alt="Visualisierung der Wanderlust App"
          title="Visualisierung der Wanderlust App"
          loading="lazy"
          itemProp="contentUrl"
        />
      </picture>
    </article>
  </section>
  <section
    className="commonGrid grid2o4left"
    itemScope
    itemType="http://schema.org/Article"
  >
    <meta itemProp="name" content="Cocktail Maschine - Tim Niedermeier" />
    <meta itemProp="genre" content="Technology and Lifestyle" />
    <article className="textContainer" itemProp="articleBody">
      <h2 itemProp="headline">Cocktail Maschine</h2>
      <p>
        Mit unserer Cocktailmaschine bringen wir Technik und Genuss zusammen.
        Die Maschine kann über 20 verschiedene Cocktails mit mixen und wird über
        eine benutzerfreundliche App gesteuert, die auch das Alter der Benutzer
        überprüft. Im Designprozess haben wir moderne Ästhetik und
        Funktionalität kombiniert. Die dazugehörige App, entwickelt mit Next.js,
        ist intuitiv und schnell. Der Prototyp kann 8 verschiedene Zutaten
        verarbeiten und bietet eine breite Auswahl an Cocktails. Zukünftige
        Features könnten KI-gestützte Cocktail-Empfehlungen umfassen. Die
        Maschine zielt darauf ab, sowohl gesellige Anlässe als auch den
        verantwortungsbewussten Umgang mit Alkohol zu fördern.
      </p>
    </article>
    <article
      className="imageContainer"
      itemProp="image"
      itemScope
      itemType="http://schema.org/ImageObject"
    >
      <picture>
        <source srcSet="gallery/cocktail/image.avif" type="image/avif" />
        <source srcSet="gallery/cocktail/image.webp" type="image/webp" />
        <img
          src="gallery/cocktail/image.jpg"
          alt="Visualisierung der Cocktailmaschine"
          title="Visualisierung der Cocktailmaschine"
          loading="lazy"
          itemProp="contentUrl"
        />
      </picture>
    </article>
  </section>
  <section
    className="commonGrid grid2o4right"
    itemScope
    itemType="http://schema.org/Article"
  >
    <meta
      itemProp="name"
      content="Schreibmaschinen-Projekt - Tim Niedermeier"
    />
    <meta itemProp="genre" content="Technology and Innovation" />
    <article className="textContainer" itemProp="articleBody">
      <h2 itemProp="headline">Schreibmaschinen-Projekt</h2>
      <p>
        In unserem Projekt haben wir zwei Schreibmaschinen erfolgreich über
        Arduino UNOs vernetzt. Die Eingabe erfolgt durch eine speziell
        angepasste Olympia-Monika, und die Ausgabe wird von einem präzisen
        Gestell, ähnlich einem 3D-Drucker, gesteuert. Für die Kommunikation
        nutzen wir eine Kombination aus Li-Fi, MQTT und IrDA, die eine robuste
        und störungsresistente Datenübertragung ermöglicht. Die Tastenerkennung
        auf der Olympia-Monika wurde durch eine eigens entwickelte Platine
        optimiert. Das Endresultat ist eine faszinierende Symbiose aus
        Technologie und Kreativität: Zwei Schreibmaschinen, die miteinander
        kommunizieren können.
      </p>
    </article>
    <article
      className="imageContainer animatedImageContainer"
      itemProp="image"
      itemScope
      itemType="http://schema.org/ImageObject"
    >
      <picture>
        <source srcSet="gallery/typewriter/recipient.avif" type="image/avif" />
        <source srcSet="gallery/typewriter/recipient.webp" type="image/webp" />
        <img
          src="gallery/typewriter/recipient.jpg"
          alt="Visualisierung des Schreibmaschinen-Projekts"
          title="Visualisierung des Schreibmaschinen-Projekts"
          loading="lazy"
          itemProp="contentUrl"
        />
      </picture>
    </article>
  </section>
  <section
    className="commonGrid grid2o4left"
    itemScope
    itemType="http://schema.org/Article"
  >
    <meta itemProp="name" content="Cocktail Maschine - Tim Niedermeier" />
    <meta itemProp="genre" content="Technology and Lifestyle" />
    <article className="textContainer" itemProp="articleBody">
      <h2 itemProp="headline">MilleniumLight</h2>
      <p>
        Unser Projekt "MilleniumLight" verbindet LEGO-Kreativität mit modernster
        Technologie. Mithilfe eines ESP 8288 und Microsoft Azure steuern wir
        einen LED-Faden im LEGO Millenium Falcon über eine eigens entwickelte
        Webanwendung. Der ESP 8288 bildet das Herzstück, präzise den LED-Faden
        im LEGO Millenium Falcon zu steuern. Die Azure-Anbindung gewährleistet
        zuverlässige Kommunikation, während die Webanwendung eine intuitive
        Kontrolle über die Lichteffekte bietet. Diese Technologie-LEGO-Symbiose
        ist eine Hommage an grenzenlose Gestaltungsmöglichkeiten. Insgesamt
        repräsentiert "MilleniumLight" die erfolgreiche Fusion von Technologie
        und LEGO-Enthusiasmus, die LEGO-Fans neue kreative Horizonte eröffnet.
      </p>
    </article>
    <article
      className="imageContainer"
      itemProp="image"
      itemScope
      itemType="http://schema.org/ImageObject"
    >
      <picture>
        <source srcSet="gallery/falcon/image.avif" type="image/avif" />
        <source srcSet="gallery/calcon/image.webp" type="image/webp" />
        <img
          src="gallery/falcon/image.jpg"
          alt="MilleniumLight-Projekt in Aktion - LED-Faden im LEGO Millenium Falcon"
          title="MilleniumLight-Projekt in Aktion - LED-Faden im LEGO Millenium Falcon"
          loading="lazy"
          itemProp="contentUrl"
        />
      </picture>
    </article>
  </section>
  <section
    className="commonGrid grid2o4right"
    itemScope
    itemType="http://schema.org/Article"
  >
    <meta itemProp="name" content="Pflanzenpflege-App - Tim Niedermeier" />
    <meta itemProp="genre" content="Technology and Innovation" />
    <article className="textContainer" itemProp="articleBody">
      <h2 itemProp="headline">Pflanzenpflege-App</h2>
      <p>
        Im Rahmen des Kurses für visuelles Prototyping im zweiten Semester
        entwickelten wir einen Prototyp für eine App, die einer vielreisenden
        jungen Frau hilft, ihre Zimmerpflanzen zu pflegen. Die App steuert die
        automatische Bewässerung und zeigt den Gesundheitszustand der Pflanzen
        an. Nach der Ideenfindung und Skizzierung auf Papier, erstellten wir
        einen mittelfristigen Prototyp in Adobe XD. Dieser Prototyp war
        entscheidend für die Usability-Tests und die Feinabstimmung der App. Im
        finalen Prototyp wurden Flow und visuelles Design kombiniert, wobei der
        Fokus auf einer benutzerfreundlichen Gestaltung lag. Wir sind stolz auf
        das Endergebnis, das die Usability der App effektiv testet.
      </p>
    </article>
    <article
      className="imageContainer"
      itemProp="image"
      itemScope
      itemType="http://schema.org/ImageObject"
    >
      <picture>
        <img
          src="gallery/plantapp/banner.png"
          alt="Visualisierung der Pflanzenpflege-App"
          title="Visualisierung der Pflanzenpflege-App"
          loading="lazy"
          itemProp="contentUrl"
        />
      </picture>
    </article>
  </section>
  <section
    className="commonGrid grid2o4left"
    itemScope
    itemType="http://schema.org/Article"
  >
    <meta itemProp="name" content="Craigslist-Redesign - Tim Niedermeier" />
    <meta itemProp="genre" content="Technology and Design" />
    <article className="textContainer" itemProp="articleBody">
      <h2 itemProp="headline">Craigslist-Redesign</h2>
      <p>
        Vor Projektbeginn analysierten wir den aktuellen Zustand von Craigslist,
        insbesondere die Benutzererfahrung beim Möbelkauf. Wir identifizierten
        mehrere Schwachstellen, darunter ein veraltetes Design und eine
        unübersichtliche Navigation. Nach der Erstellung einer "As-Is Map"
        entwickelten wir einen Lo-Fi-Prototyp, den wir anhand von Benutzertests
        weiter optimierten. Der finale Prototyp zeichnet sich durch ein
        modernes, benutzerfreundliches Design aus, das durch kategorisierte
        Icons und eine verbesserte Suchfunktion die Navigation erleichtert. Das
        Ergebnis ist eine deutlich verbesserte Benutzererfahrung und ein
        moderneres Erscheinungsbild der Website.
      </p>
    </article>
    <article
      className="imageContainer"
      itemProp="image"
      itemScope
      itemType="http://schema.org/ImageObject"
    >
      <picture>
        <img
          src="gallery/craigslist/banner.jpg"
          alt="Craigslist-Redesign - Visualisierung der überarbeiteten Website"
          title="Craigslist-Redesign - Visualisierung der überarbeiteten Website"
          loading="lazy"
          itemProp="contentUrl"
        />
      </picture>
    </article>
  </section>
  <section
    className="commonGrid grid2o4right"
    itemScope
    itemType="http://schema.org/Article"
  >
    <meta itemProp="name" content="Pflanzenpflege-App - Tim Niedermeier" />
    <meta itemProp="genre" content="Technology and Innovation" />
    <article className="textContainer" itemProp="articleBody">
      <h2 itemProp="headline">Spellcast: Elemente-Duell</h2>
      <p>
        Spellcast, ein Spiel, das im ersten Semester mit HTML, CSS und JS
        entstand, folgt dem Prinzip von Schere, Stein, Papier. In jedem Zug
        stehen dem Spieler vier Optionen zur Verfügung, die an Pokémon erinnern:
        Wasser, Feuer, Pflanze und Blut. Die Besonderheit von Blut liegt darin,
        dass es einen zusätzlichen Angriff darstellt, den nur der Spieler
        einsetzen kann. Dieser Attacke geht über das traditionelle Schere,
        Stein, Papier hinaus und fügt dem Gegner zufälligen Schaden zu.
        Allerdings erleidet der Spieler selbst einen Treffer, da es keine
        Verteidigungsmöglichkeit gibt.
      </p>
    </article>
    <article
      className="imageContainer"
      itemProp="image"
      itemScope
      itemType="http://schema.org/ImageObject"
    >
      <picture>
        <source srcSet="gallery/wizard/image.avif" type="image/avif" />
        <source srcSet="gallery/wizard/image.webp" type="image/webp" />
        <img
          src="gallery/wizard/image.jpg"
          alt="Spellcast: Elemente-Duell - Visualisierung des Spiels"
          title="Spellcast: Elemente-Duell - Visualisierung des Spiels"
          loading="lazy"
          itemProp="contentUrl"
        />
      </picture>
    </article>
  </section>
  <section
    id="cv"
    className="commonGrid grid2o4left"
    itemScope
    itemType="http://schema.org/Article"
  >
    <meta
      itemProp="name"
      content="Hochschule für Gestaltung, Schwäbisch Gmünd"
    />
    <meta itemProp="genre" content="Technology and Design" />
    <article className="textContainer" itemProp="articleBody">
      <h2 itemProp="headline">Lebenslauf</h2>
      <p>
        Mit 27 Jahren und einem Studium im Bereich Internet of Things (IoT)
        bringe ich eine einzigartige Mischung aus technischem Know-how und
        kreativer Leidenschaft mit. Schon als Kind zeigte sich meine Kreativität
        beim Zeichnen von Mandalas und dem Entwerfen eigener LEGO Star
        Wars-Schiffe. Diese frühe Begeisterung für Design hat sich zu einer
        professionellen Laufbahn entwickelt: Mein Ziel ist es, als Web- und
        App-Designer die digitale Landschaft zu prägen und letztlich eine
        innovative Social-Media-App zu schaffen.
      </p>
    </article>
    <article
      className="imageContainer"
      itemProp="image"
      itemScope
      itemType="http://schema.org/ImageObject"
    >
      <picture>
        <source srcSet="gallery/cv/image.avif" type="image/avif" />
        <source srcSet="gallery/cv/image.webp" type="image/webp" />
        <img
          src="gallery/cv/image.jpg"
          alt="Pfad auf bewaldetem Hochland - Mein persönlicher Weg des Lebens"
          title="Mein persönlicher Weg des Lebens"
          loading="lazy"
          itemProp="contentUrl"
        />
      </picture>
    </article>
  </section>
  <section
    className="commonGrid grid2o4right"
    itemScope
    itemType="http://schema.org/Article"
  >
    <meta itemProp="name" content="Pflanzenpflege-App - Tim Niedermeier" />
    <meta itemProp="genre" content="Technology and Innovation" />
    <article className="textContainer" itemProp="articleBody">
      <h2 itemProp="headline">Internet der Dinge</h2>
      <p>
        Studium an der
        <a href="https://www.hfg-gmuend.de">Hochschule für Gestaltung</a> in
        Schwäbisch Gmünd. Das Internet der Dinge (IoT) bezieht sich auf die
        Vernetzung von physischen Geräten, Fahrzeugen, Gebäuden und anderen
        Objekten über das Internet. Ziel ist es, diesen Objekten die Fähigkeit
        zu geben, Daten zu sammeln, auszutauschen und zu verarbeiten, um
        Effizienzsteigerungen, Automatisierung und neue Anwendungsmöglichkeiten
        zu ermöglichen.
      </p>
    </article>
    <article
      className="imageContainer"
      itemProp="image"
      itemScope
      itemType="http://schema.org/ImageObject"
    >
      <picture>
        <source srcSet="gallery/iot/image.avif" type="image/avif" />
        <source srcSet="gallery/iot/image.webp" type="image/webp" />
        <img
          src="gallery/iot/image.jpg"
          alt="Projekt im Bereich Internet der Dinge"
          title="Projekt im Bereich Internet der Dinge"
          loading="lazy"
          itemProp="contentUrl"
        />
      </picture>
    </article>
  </section>
  <section
    className="commonGrid grid2o4left"
    itemScope
    itemType="http://schema.org/Article"
  >
    <meta
      itemProp="name"
      content="Hochschule für Gestaltung, Schwäbisch Gmünd"
    />
    <meta itemProp="genre" content="Technology and Design" />
    <article className="textContainer" itemProp="articleBody">
      <h2 itemProp="headline">Immobilienwirtschaft</h2>
      <p>
        Mit dem Beginn meines Studiums in Immobilienwirtschaft, motiviert durch
        mein persönliches Interesse an Architektur und Wohnraumgestaltung sowie
        die aktuelle Marktlage, konnte ich eine umfassende Wissensbasis
        aufbauen. Diese Erfahrung vertiefte nicht nur meine Leidenschaft für
        ästhetisches Design und Raumplanung, sondern schärfte auch meine
        Fähigkeiten in den Bereichen Marktanalyse und Trends.
      </p>
    </article>
    <article
      className="imageContainer"
      itemProp="image"
      itemScope
      itemType="http://schema.org/ImageObject"
    >
      <picture>
        <source srcSet="gallery/realestate/image.avif" type="image/avif" />
        <source srcSet="gallery/realestate/image.webp" type="image/webp" />
        <img
          src="gallery/realestate/image.jpg"
          alt="Bild von einer Wohngegend, gefunden auf Unsplash"
          title="Bild von einer Wohngegend, gefunden auf Unsplash"
          loading="lazy"
          itemProp="contentUrl"
        />
      </picture>
    </article>
  </section>
  <section
    className="commonGrid grid2o4right"
    itemScope
    itemType="http://schema.org/Article"
  >
    <meta itemProp="name" content="Pflanzenpflege-App - Tim Niedermeier" />
    <meta itemProp="genre" content="Technology and Innovation" />
    <article className="textContainer" itemProp="articleBody">
      <h2 itemProp="headline">Transport und Logistik</h2>
      <p>
        Während meiner Ausbildung als Kaufmann für Spedition und
        Logistikdienstleistung wurde ich für meine herausragenden Leistungen mit
        einem Preis ausgezeichnet. In dieser Zeit übernahm ich aktiv die Rolle
        des Klassensprechers und engagierte mich zudem als
        Ausbildungsbotschafter im IHK-Programm. Ein besonderer Höhepunkt war
        meine Belohnung in Form eines viermonatigen Aufenthalts in Barcelona,
        der meine Ausbildungszeit zu einer prägenden und vielfältigen Erfahrung
        machte.
      </p>
    </article>
    <article
      className="imageContainer"
      itemProp="image"
      itemScope
      itemType="http://schema.org/ImageObject"
    >
      <picture>
        <source srcSet="gallery/logistic/image.avif" type="image/avif" />
        <source srcSet="gallery/logistic/image.webp" type="image/webp" />
        <img
          src="gallery/logistic/image.jpg"
          alt="Hafen mit Container um das Thema Logistik näher zu bringen"
          title="Bild von einem Hafen um das Thema Logistik greifbar zu machen"
          loading="lazy"
          itemProp="contentUrl"
        />
      </picture>
    </article>
  </section>
    </main>
    );
};

export default Main;