import { CookComponent } from "./cooksComponent"
import { cookInfo } from '@data/information';

export function CookSection() {
    return (
        <div>
            {cookInfo.map((cook, index) => (
                <CookComponent
                key={index}
                title={cook.title}
                description={cook.description}
                />
            ))}
        </div>
    );
}