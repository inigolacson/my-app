import { CookComponent } from "./cooksComponent";
import { cookInfo } from '@data/information';
import styles from '@styles/modules/index.module.scss';

export function CookSection() {
    return (
        <section>
            <h1 className={styles.title}>what's currently cooking <span>🍳</span></h1>
            <div className={styles.line}></div>
            {cookInfo.map((cook, index) => (
                <CookComponent
                key={index}
                title={cook.title}
                description={cook.description}
                />
            ))}
        </section>
    );
}