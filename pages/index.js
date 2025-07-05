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
import Head from 'next/head';
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
    <><Head>
      <title>Iñigo Lacson | Frontend Developer</title>
      <meta name="description" content="Portfolio of Iñigo Lacson — Frontend Developer, UI/UX Designer, and Game Developer" />

      <meta property="og:title" content="Iñigo Lacson | Frontend Developer" />
      <meta property="og:description" content="Explore my work, projects, and skills." />
      <meta property="og:image" content="https://your-site.vercel.app/og-image.jpg" />
      <meta property="og:url" content="https://porfolio-ashen-eight.vercel.app/" />
      <meta property="og:type" content="website" />
    </Head>
    <main>
        <div className={styles.container}>
          <div className={styles.left}>
            <section className={hero.heroContainer}>
              <Image
                src="/photos/hero.jpg"
                alt="Hero"
                width={800}
                height={800} />
              <h1 className={hero.nameBanner}>{info.name}</h1>
              <TypedTitle />
              <address className={hero.address}><span className={styles.normal}>📍</span>{info.address}</address>
              <p className={hero.moto}><span className={styles.normal}>🤷‍♂️</span> {info.motto}</p>
              <ResumeButton />
              <p className={hero.rights}>© 2025 @inigolacson — All rights reserved.</p>
            </section>
          </div>
          <div className={styles.right}>
            <div className={styles.rightModules}>
              <section className={styles.containerGap}>
                <CookSection />
              </section>
              <div className={styles.divider}></div>
              <ProjectSection />
              <div className={styles.divider}></div>
              <ExperienceSection />
              <div className={styles.divider}></div>
              <SkillSection />
              <div className={styles.divider}></div>
              <EducationSection />
            </div>
          </div>
        </div>

        <div className={cursor.light} id="cursor-light"> </div>
        <SocialSection />
        <div className={styles.bottomSpace}></div>
      </main></>
  );
} 