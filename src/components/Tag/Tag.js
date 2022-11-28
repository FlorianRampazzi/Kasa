import './Tag.css'

/*  Création du composant Tag
    Récupération du contenu (list de tags) correspondant à l'id de l'élement parent via les propriétés
    Pour chaque tag présent dans la liste, afficher un span avec le nom du tag.
    Utilisation des fragments react afin de ne pas générer une div inutile supplémentaire. */
export default function Tag({ content }) {
  const tagsList = content
  const tag = tagsList.map((tag) => (
    <span key={tag.toString()} className="kasa-tag">
      {tag}
    </span>
  ))

  return <>{tag}</>
}
