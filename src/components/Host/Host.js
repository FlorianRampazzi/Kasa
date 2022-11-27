import './Host.css'

export default function Host({host}) {
    const firstName = host.name.split(' ')[0]
    const lastName = host.name.split(' ')[1]
    return (
        <div className='kasa-accomodation-host'>
            <p className='kasa-accomodation-host-name'>{firstName} <br /> {lastName}</p>
            <img src={host.picture} className='kasa-accomodation-host-picture' alt={`Hôte ${host.name}`} />
        </div>
    )
}