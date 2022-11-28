import './Host.css'

/* Création du composant Host qui affiche les informations du loueur.*/
export default function Host({ host }) {
  /* Récupération de l'objet via les props
     On récupère le nom complet et on le split en deux variables au niveau de l'espace afin d'isoler le prenom et le nom.*/
  const firstName = host.name.split(' ')[0]
  const lastName = host.name.split(' ')[1]
  return (
    <div className="kasa-accomodation-host">
      <p className="kasa-accomodation-host-name">
        {firstName} <br /> {lastName}
      </p>
      <img
        src={host.picture}
        className="kasa-accomodation-host-picture"
        alt={`Hôte ${host.name}`}
      />
    </div>
  )
}
