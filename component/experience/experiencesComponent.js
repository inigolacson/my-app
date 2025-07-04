import experience from '@styles/modules/right/experiences.module.scss';

export function ExperienceComponent({company, description, date }) {
    return (
        <section className={experience.experienceContainer}>
            <h1 className={experience.experienceCompany}>{company}</h1>
            <p className={experience.experienceDate}>{date}</p>
            <p className={experience.experienceDescription}>{description}</p>
        </section>
    )
}