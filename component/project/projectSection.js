import { ProjectComponent } from './projectsComponent';
import styles from '@styles/modules/index.module.scss';
import { projectInfo } from '@data/information';

export function ProjectSection() {
    return (
        <section>
            <h1 className={styles.title}>projects <p className={styles.parenthesis}>(that served)</p> <span>🔥</span></h1>
            <div className={styles.line}></div>
            {projectInfo.map((proj, index) => (
                <ProjectComponent 
                key={index}
                title={proj.title}
                date={proj.date}
                description={proj.description}
                icon={proj.icon}
                link={proj.link}
                />
            ))}
        </section>
    )
}