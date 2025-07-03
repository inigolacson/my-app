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
            <icons.SiReact className={skills.skillIcons} title='JavaScript'></icons.SiReact>
            <icons.SiNextdotjs className={skills.skillIcons} title='JavaScript'></icons.SiNextdotjs>
            <icons.SiFlutter className={skills.skillIcons} title='JavaScript'></icons.SiFlutter>
            <icons.SiTailwindcss className={skills.skillIcons} title='JavaScript'></icons.SiTailwindcss>
            <icons.SiSass className={skills.skillIcons} title='JavaScript'></icons.SiSass>
        </>
    )
}

export function SkillDatabase() {
    return (
        <>
            <p className={skills.subheader}>Database</p>
            <icons.SiReact className={skills.skillIcons} title='JavaScript'></icons.SiReact>
            <icons.SiReact className={skills.skillIcons} title='JavaScript'></icons.SiReact>
        </>
    )
}

export function SkillDevOps() {
    return (
        <>
        <p className={skills.subheader}>DevOps</p>
        <icons.SiReact className={skills.skillIcons} title='JavaScript'></icons.SiReact>
        <icons.SiReact className={skills.skillIcons} title='JavaScript'></icons.SiReact>
        </>
    )
}

// export function skill() {
//     return (
//         <>
        
//         </>
//     )
// }