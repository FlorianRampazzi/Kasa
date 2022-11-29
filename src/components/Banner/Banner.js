import './Banner.css'

/* Création du composant Banner*/
export default function Banner({ src, title }) {
  return (
    <header className="kasa-banner-container">
      <img
        className="kasa-banner-container-img"
        src={src}
        alt="Paysage naturel"
      />
      <h1 className="kasa-banner-container-title">{title}</h1>
    </header>
  )
}
