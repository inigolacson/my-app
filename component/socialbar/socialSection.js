import { socialLinks } from "@data/information";
import button from "@styles/modules/left/socialButtons.module.scss"
import social from '@styles/modules/socialbar.module.scss';

export function SocialSection() {
    return (
        <section>
            <div className={social.socialContainer}>
            {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={button.button}>
                <Icon className={social.socialIcons}/>
                </a>
                );
            })}

            </div>
        </section>
    )
}