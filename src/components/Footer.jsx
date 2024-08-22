import './Footer.css'
import LogoLinkedin from '../assets/logo-linkedin.png'
import LogoOutlook from '../assets/logo-outlook.png'

export function FooterComp () {
    return (
        <footer className='bot-page'>
        <div className='big-container'>
        <h3 className="footer-title">Contact</h3>
            <div className="linkedin-container">
                <img src={LogoLinkedin} alt="Logo Linkedin" />
                <a href='https://www.linkedin.com/in/kevin-rodriguez-carames/' target='_blank'>https://www.linkedin.com/in/kevin-rodriguez-carames/</a>
            </div>
            <div className="outlook-container">
                <img src={LogoOutlook} alt="Logo Outlook" />
                <p>kevinjob96@outlook.es</p>
            </div>
        </div>
        </footer>
    )
}