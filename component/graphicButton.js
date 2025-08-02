import { FaCamera } from "react-icons/fa";
import resume from "@styles/modules/resume.module.scss";
import Link from "next/link";

export default function GraphicButton() {
  return (
    <section className={resume.ResumePositioning}>
      <Link href="/graphics" passHref className={resume.resumeButton}>
        <FaCamera className={resume.resumeIcon} />
        <p className={resume.resumeText}>Graphics Portfolio</p>
      </Link>
    </section>
  );
}
