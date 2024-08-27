import './CardInfo.css'

export function CardInfoComp ({infoTitle, info, image, altImg ,buttonCard}) {
    return (
        <article>
            <div className='info-container'>
                <h3 className='title-card'>{infoTitle}</h3>
                <p>{info}</p>
                <button>{buttonCard}</button>
            </div>
            <img src={image} alt={altImg}/>
        </article>
    )
}