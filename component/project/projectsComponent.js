import projects from '@styles/modules/right/projects.module.scss';

export function ProjectComponent({title, date, description, icon: Icon, link}) {
    return (
        <section>
            <div className={projects.projectContainer}>
                <div className={projects.titleIconContainer}>
                    <h1 className={projects.projectTitle}>{title}</h1>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <Icon className={projects.projectIcon} />
                    </a>
                </div>
                <p className={projects.projectDate}>{date}</p>
            </div>
                <p className={projects.projectDescription}>{description}</p>
        </section>
    )
}