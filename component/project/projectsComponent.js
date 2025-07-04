import projects from '@styles/modules/right/projects.module.scss';

export function ProjectComponent({title, date, description}) {
    return (
        <section className={projects.projectContainer}>
            <h1 className={projects.projectTitle}>{title}</h1>
            <p className={projects.projectDate}>{date}</p>
            <p className={projects.projectDescription}>{description}</p>
        </section>
    )
}