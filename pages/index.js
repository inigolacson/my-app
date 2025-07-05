import styles from '@styles/modules/index.module.scss';
import hero from '@styles/modules/left/hero.module.scss';
import cursor from '@styles/modules/cursorLight.module.scss';
import { SkillSection } from '@component/skill/skillsSection.js'
import { CookSection } from '@component/cooking/cookSection';
import  info, { links } from '@data/information.js';
import { useEffect, useState } from 'react';
import { EducationSection } from '@component/education/educationSection';
import { ExperienceSection } from '@component/experience/experiencesSection';
import { ProjectSection } from '@component/project/projectSection';
import { SocialSection } from '@component/socialbar/socialSection';
import Image from 'next/image';
import { ResumeButton } from '@component/resume';
import { TypedTitle } from '@component/typed';


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
            <TypedTitle/>
            <address className={hero.address}><span className={styles.normal}>📍</span>{info.address}</address>
            <p className={hero.moto}><span className={styles.normal}>🤷‍♂️</span> {info.motto}</p>
               <ResumeButton/>
          </section>                      
        </div>
        <div className={styles.right}>
          <div className={styles.rightModules}>
              <section className={styles.containerGap}>
                <CookSection/>
              </section>
            <div className={styles.divider}></div>
              <ProjectSection/>
            <div className={styles.divider}></div>
              <ExperienceSection/>
            <div className={styles.divider}></div>
              <SkillSection />
            <div className={styles.divider}></div>
              <EducationSection/>
          </div>
        </div> 
      </div>
      
      <div className={cursor.light} id="cursor-light"> </div>
      <SocialSection/>
      <div className={styles.bottomSpace}></div>
    </main>
  );
} 