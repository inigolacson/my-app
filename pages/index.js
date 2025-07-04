import styles from '@styles/modules/index.module.scss';
import hero from '@styles/modules/left/hero.module.scss';
import buttons from '@styles/modules/left/socialButtons.module.scss';
import cursor from '@styles/modules/cursorLight.module.scss';
import about from '@styles/modules/right/aboutme.module.scss'
import { SkillSection } from '@component/skill/skillsSection.js'
import { CookSection } from '@component/cooking/cookSection';
import  info, { links } from '@data/information.js';
import * as icons from "@data/icons";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  useEffect(() => {
    const light = document.getElementById('cursor-light');
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      if (light) {
        light.style.left =`${mouseX}px`;
        light.style.top = `${mouseY}px`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.left}>
          <section className={hero.heroContainer}>
            <Image 
            src="/photos/hero.jpg"
            alt="Hero"
            width={800}
            height={800} 
            />
            <h1 className={hero.nameBanner}>{info.name}</h1>
            <p className={hero.title}>{info.title}</p>
            <address className={hero.address}><icons.HiLocationMarker className={hero.icon}/>{info.address}</address>
            <p className={hero.moto}>{info.motto}</p>
            <div className={buttons.buttonContainer}>
              <a href={links.github} target="_blank" rel="noopener norefferer"
              className={buttons.button}><icons.FaGithub className={buttons.icon}/></a>
              <a href={links.linkedin} target="_blank" rel="noopener norefferer"
              className={buttons.button}><icons.FaLinkedin className={buttons.icon}/></a>
              <a href={links.gmail} target="_blank" rel="noopener norefferer"
              className={buttons.button}><icons.FaEnvelope className={buttons.icon}/></a>
              <a href= {links.facebook} target="_blank" rel="noopener norefferer"
              className={buttons.button}><icons.FaFacebookSquare className={buttons.icon}/></a>
              <a href={links.instagram} target="_blank" rel="noopener norefferer"
              className={buttons.button}><icons.FaInstagram className={buttons.icon}/></a>
            </div>
            <a href={links.resume} download className={buttons.resumeButton}>
              <icons.FaFileAlt className={buttons.resumeIcon}></icons.FaFileAlt>
              <span className={buttons.resumeText}>Resume</span>
            </a>
          </section>                      
        </div>
        <div className={styles.right}>
          <div className={styles.rightModules}>
              <section className={styles.wholeContainer}>
                <CookSection/>
              </section>
            <div className={styles.divider}></div>
              <SkillSection />
          </div>
        </div> 
      </div>
      <div className={cursor.light} id="cursor-light"> </div>
    </main>
  );
} 