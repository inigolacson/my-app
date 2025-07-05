import  { Typewriter }  from "react-simple-typewriter";
import { titles } from "@data/information";
import hero from '@styles/modules/left/hero.module.scss';

export function TypedTitle() {
    return (
        <section>
            <span className={hero.title}>
                <Typewriter
                words={titles}
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1000}
                loop
                cursor
                cursorStyle = '_'
                />
            </span>
        </section>
    )
}