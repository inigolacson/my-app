import skills from '@styles/modules/right/skills.module.scss';
import styles from '@styles/modules/index.module.scss';
import { SkillLanguages, SkillFrameworks, SkillDatabase, SkillDevOps, SkillDesignPrototyping, SkillProjectManagement } from './skillsComponent';


export function SkillSection() {
    return (
        <section>
            <h1 className={styles.title}>technologies <span>🤖</span></h1>
            <div className={styles.line}></div>
            <section className={styles.wholeContainer}>
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
                    <SkillProjectManagement />
                </section>
                <section className={skills.iconContainer}>
                    <SkillDesignPrototyping />
                </section>
            </section>
        </section>
    )
}