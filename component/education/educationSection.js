import { EducationComponent } from "./educationComponent";
import styles from '@styles/modules/index.module.scss';
import { educationInfo } from '@data/information';

export function EducationSection() {
    return (
        <section>
            <h1 className={styles.title}>education <span>🎓</span></h1>
            <div className={styles.line}></div>
            {educationInfo.map((educ, index) => (
                <EducationComponent 
                key={index}
                name={educ.name}
                course={educ.course}
                date={educ.date}
                />
            ))}
        </section>
    )
}