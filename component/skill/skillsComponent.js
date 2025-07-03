import skills from '@styles/modules/right/skills.module.scss';
import * as icons from "@data/icons";

export function SkillLanguages() {
    return (
        <>
            <p className={skills.subheader}>Languages</p>
            <icons.SiJavascript className={skills.skillIcons} title='JavaScript'></icons.SiJavascript>
            <icons.SiTypescript className={skills.skillIcons} title='TypeScript'></icons.SiTypescript>
            <icons.SiPython className={skills.skillIcons} title='Python'></icons.SiPython>
            <icons.SiDart className={skills.skillIcons} title='Dart'></icons.SiDart>
            <icons.SiGodotengine className={skills.skillIcons} title='GDScript'></icons.SiGodotengine>
            <icons.SiDotnet className={skills.skillIcons} title='C#'></icons.SiDotnet>
        </>
    )
}

export function SkillFrameworks() {
    return (
        <>
            <p className={skills.subheader}>Frameworks</p>
            <icons.SiReact className={skills.skillIcons} title='ReactJs'></icons.SiReact>
            <icons.SiNextdotjs className={skills.skillIcons} title='NextJs'></icons.SiNextdotjs>
            <icons.SiFlutter className={skills.skillIcons} title='Flutter'></icons.SiFlutter>
            <icons.SiTailwindcss className={skills.skillIcons} title='Tailwind CSS'></icons.SiTailwindcss>
            <icons.SiSass className={skills.skillIcons} title='SCSS'></icons.SiSass>
        </>
    )
}
//reactnative
//nativewind
export function SkillDatabase() {
    return (
        <>
            <p className={skills.subheader}>Database</p>
            <icons.SiMysql className={skills.skillIcons} title='MySQL'></icons.SiMysql>
            <icons.SiReact className={skills.skillIcons} title='MSSQL Server'></icons.SiReact>
            <icons.SiReact className={skills.skillIcons} title='SAP HANA'></icons.SiReact>
        </>
    )
}
//mssql
//saphana
export function SkillDevOps() {
    return (
        <>
            <p className={skills.subheader}>DevOps</p>
            <icons.SiGit className={skills.skillIcons} title='Git'></icons.SiGit>
            <icons.SiGithub className={skills.skillIcons} title='GitHub'></icons.SiGithub>
        </>
    )
}

export function SkillProjectManagement() {
    return (
        <>
            <p className={skills.subheader}>Project Management</p>
            <icons.SiJira className={skills.skillIcons} title='Jira'></icons.SiJira>
            <icons.SiReact className={skills.skillIcons} title='Miro'></icons.SiReact>
            <icons.SiReact className={skills.skillIcons} title='Microsoft Teams'></icons.SiReact>
        </>
    )
}
//miro
//microsoft teams
export function SkillDesignPrototyping() {
    return (
        <>
            <p className={skills.subheader}> Design and Prototyping</p>
            <icons.SiFigma className={skills.skillIcons} title='Figma'></icons.SiFigma>
            <icons.SiCanva className={skills.skillIcons} title='Canva'></icons.SiCanva>
            <icons.SiAdobexd className={skills.skillIcons} title='Adobe XD'></icons.SiAdobexd>
            <icons.SiAdobephotoshop className={skills.skillIcons} title='Adobe Photoshop'></icons.SiAdobephotoshop>
            <icons.SiAdobeillustrator className={skills.skillIcons} title='Adobe Illustrator'></icons.SiAdobeillustrator>
        </>
    )
}