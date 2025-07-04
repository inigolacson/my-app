import educ from "@styles/modules/right/education.module.scss";

export function EducationComponent(title, course, year) {
    return (
        <section className={educ.educationContainer}>
        <h1 className={educ.educationTitle}>{title} - {year}</h1>
        <p className={education}>{course}</p>
        </section>
    )
}