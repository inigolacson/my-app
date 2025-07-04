import educ from "@styles/modules/right/education.module.scss";

export function EducationComponent({name, course, date}) {
    return (
        <section className={educ.educationContainer}>
        <h1 className={educ.educationTitle}>{name}</h1>
        <p className={educ.educationYear}>{date}</p>
        <p className={educ.educationCourse}>{course}</p>
        </section>
    )
}