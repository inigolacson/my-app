import skills from '@styles/modules/right/skills.module.scss';
import styles from '@styles/modules/index.module.scss';
import { SkillLanguages, SkillFrameworks, SkillDatabase, SkillDevOps } from './skillsComponent';


export function SkillSection() {
    return (
        <section className={skills.skillsContainer}>
            <h1 className={styles.title}>Skills</h1>
            <section className={skills.iconContainer}>
                <SkillLanguages />
            </section>
            <section className={skills.iconContainer}>
                <SkillFrameworks />
            </section>
            <section className={skills.iconContainer}>
               <SkillDatabase />
            </section>
            <section className={skills.iconContainer}>
                <SkillDevOps />
            </section>
            <section className={skills.iconContainer}>

            </section>
            <section className={skills.iconContainer}>
                
            </section>
            <section className={skills.iconContainer}>
                
            </section>
        </section>
    )
}