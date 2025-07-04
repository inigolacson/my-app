import cook from '@styles/modules/right/aboutme.module.scss';

export function CookComponent({title, description}) {
    return (
        <section className={cook.cookContainer}>
            <p className={cook.cookName}>{title}</p>
            <p className={cook.cookDescription}>{description}</p>
        </section>
    )
}