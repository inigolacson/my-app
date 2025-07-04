import { ExperienceComponent } from "./experiencesComponent";
import styles from "@styles/modules/index.module.scss";
import { experienceInfo } from '@data/information'

export function ExperienceSection () {
    return (
        <section>
            <h1 className={styles.title}>experience <span>🧠</span></h1>
            <div className={styles.line}></div>
            {experienceInfo.map((expe, index) => (
                <ExperienceComponent 
                key={index}
                company={expe.company}
                description={expe.description}
                date={expe.date}/>
            ))}
        </section>
    )
}