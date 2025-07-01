import styles from '@styles/modules/index.module.scss';
import hero from '@styles/modules/hero.module.scss';
import buttons from '@styles/modules/socialButtons.module.scss';
import { HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaFacebookSquare, FaInstagram, FaEnvelope, FaFileAlt} from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={hero.heroContainer}>
            <Image 
            src="/photos/hero.jpg"
            alt="Hero"
            width={800}
            height={800} 
            />
            <h1 className={hero.nameBanner}>Inigo Manuel Antonio T. Lacson</h1>
            <p className={hero.title}>Full Stack Developer</p>
            <address className={hero.address}><HiLocationMarker className={hero.icon}/> Binagonan Rizal, Philippines 1940</address>
            <p className={hero.moto}>Insert Motto</p>
            <div className={buttons.buttonContainer}>
              <a href="https://github.com/inigolacson"
              target="_blank" 
              rel="noopener norefferer" 
              className={buttons.button}><FaGithub className={buttons.icon}/></a>
              <a href="https://www.linkedin.com/in/i%C3%B1igo-lacson-150351310/"
              target="_blank" 
              rel="noopener norefferer"
              className={buttons.button}><FaLinkedin className={buttons.icon}/></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=inigolacson01@gmail.com&su=Hello%20from%20your%20portfolio&body=I%20saw%20your%20site%20and%20wanted%20to%20reach%20out!"
              target="_blank"
              rel="noopener norefferer"
              className={buttons.button}><FaEnvelope className={buttons.icon}/></a>
              <a href="https://www.facebook.com/InigoLacsonT/"
              target="_blank"
              rel="noopener norefferer"
              className={buttons.button}><FaFacebookSquare className={buttons.icon}/></a>
              <a href="https://www.instagram.com/inigolacson/"
              target="_blank"
              rel="noopener norefferer"
              className={buttons.button}><FaInstagram className={buttons.icon}/></a>
            </div>
            <a href="" download className={buttons.resumeButton}>
              <FaFileAlt className={buttons.resumeIcon}></FaFileAlt>
              <span className={buttons.resumeText}>Resume</span>
            </a>
          </div>                      
        </div>
        <div className={styles.right}>
          This is 65%
        </div> 
      </div>
    </main>
  );
} 