import experience from '@styles/modules/right/experiences.module.scss';

export function ExperienceComponent({company, description, date }) {
    return (
        <section>
        <div className={experience.experienceContainer}>
            <h1 className={experience.experienceCompany}>{company} </h1>
            <p className={experience.experienceDate}>{date}</p>
        </div>
         <p className={experience.experienceDescription}>{description}</p>
        </section>
    )
}