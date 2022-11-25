export default function Banner({src, title}) {
    return (
        <div className='kasa-banner-container'>
            <h1>{title}</h1>
            <img className='kasa-banner-container-img' src={src} alt='Littoral rocheux avec une mer agitée' />
        </div>
    )
}