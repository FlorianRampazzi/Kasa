import './Banner.css'

export default function Banner({src, title}) {
    return (
        <div className='kasa-banner-container'> 
            <img className='kasa-banner-container-img' src={src} alt='Littoral rocheux avec une mer agitée' />
            <h1 className='kasa-banner-container-title'>{title}</h1>
        </div>
    )
}