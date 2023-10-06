import { ExternalLink } from '@/components/ExternalLinks';
import data from '../../data.json'
import styles from './index.module.css'
import { Profile } from "@/components/Profile";
import { WorkExperience } from '@/components/WorkExperience';
import Link from 'next/link';
import { ProjectImage } from '@/components/ProjectImage';

export default function Home() {
    return (
        <main className={styles.main}>
            <div>
                <Profile />
                <div className={styles.socialMedia}>
          <ExternalLink
            link="https://www.linkedin.com/in/marilyn-arag%C3%B3n-monroy-723a201b3/"
            title="Linkedin"
          />
          <ExternalLink link="https://github.com/Marilynmonroy" title="GitHub" />
          <ExternalLink link="https://www.behance.net/Marilyn_monroy" title="Behance" />
        </div>
        <WorkExperience
          rule="Community manager"
          year="2022"
          company="Swap Translators"
                />
                <WorkExperience
          rule="Community manager"
          year="2021"
          company="AEME - fast food"
        />
            </div>
            <div>
        {data.map((project) => {
          return (
            <Link key={project.id} href={`project/${project.id}`}>
                  <ProjectImage img={project.imagem} alt={project.titulo}/>
            </Link>
          );
        })}
      </div>
        </main>
    )
}