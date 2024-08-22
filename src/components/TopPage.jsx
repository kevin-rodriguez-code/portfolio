import './TopPage.css'

export function TopPage({pageTitle}) {
    return(
        <section className="page-title-section">
            <p>{pageTitle}</p>
        </section>
    )
}