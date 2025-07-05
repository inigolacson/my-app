import { FaFileAlt } from "react-icons/fa";
import resume from '@styles/modules/resume.module.scss';
import { emailLink } from '@data/information';

export function ResumeButton () {
    return (
        <section className={resume.ResumePositioning}>
            <a href={emailLink.link} download className={resume.resumeButton}>
                <FaFileAlt className={resume.resumeIcon}/>
                <p className={resume.resumeText}>resume</p>
            </a>
        </section>
    )
}