import './Home.css'
import { CardInfoComp } from './CardInfo'
import Innovation from '../assets/innovation.jpg'

export function HomePage () {
    const infoTitleCard = 'La innovación comienza aquí'
    const infoCard = 'Hay que pensar "fuera de la caja" para descubrir nuevas formas de trabajar que mejoren las actuales. Para innovar, hay que arriesgar y estar dispuesto a equivocarse.'
    const infoImg = 'Chico de espaldas observa una pared llena de hojas'
    const buttonCard = 'Ver proyectos'
    return(
        <section>
            <CardInfoComp infoTitle={infoTitleCard} info={infoCard} image={Innovation} altimg={infoImg} buttonCard={buttonCard} />
        </section>
    )
}