import projects from '@styles/modules/right/projects.module.scss';

export function ProjectComponent({title, date, description}) {
    return (
        <section>
            <div className={projects.projectContainer}>
                <h1 className={projects.projectTitle}>{title}</h1>
                <p className={projects.projectDate}>{date}</p>
            </div>
                <p className={projects.projectDescription}>{description}</p>
        </section>
    )
}