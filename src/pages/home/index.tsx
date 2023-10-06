import { ExternalLink } from '@/components/ExternalLink';
import data from '../../data.json'
import styles from './index.module.css'
import { Profile } from "@/components/Profile";
import { WorkExperience } from '@/components/WorkExperience';
import Link from 'next/link';
import { ProjectImage } from '@/components/ProjectImage';
import { Footer } from '@/components/Footer';
import { Tittle } from '@/components/Tittle';
import { Button } from '@/components/Button';

export default function Home() {
    return (
        <><main className={styles.main}>
            <div className={styles.profile}>
<Profile />
                <div className={styles.personalDescription}>
                    <Tittle tittle='Designer e desenvolvedora' />
                    <span>
                        Olá! Sou uma profissional de línguas modernas com um forte interesse em comunicação e design digital. Minhas habilidades estão centradas no processo criativo e na criação de conteúdo para plataformas digitais, assim como na construção de identidades visuais e no desenvolvimento de branding pessoal.
                    </span>
                </div>
                
                <div className={styles.socialMedia}>
                    <ExternalLink
                        link="https://www.linkedin.com/in/marilyn-arag%C3%B3n-monroy-723a201b3/"
                        title="Linkedin" />
                    <ExternalLink link="https://github.com/Marilynmonroy" title="GitHub" />
                    <ExternalLink link="https://www.behance.net/Marilyn_monroy" title="Behance" />
                </div>
                <Tittle tittle='Expêriencia'/>
                <WorkExperience
                    rule="Community manager"
                    year="2022"
                    company="Swap Translators" />
                <WorkExperience
                    rule="Community manager"
                    year="2021"
                    company="AEME - fast food" />

                <Button title='Baixar currículo' href='/public/MarilynAragon.cv (2).pdf' />

                
            </div>
            <div>
                {data.map((project) => {
                    return (
                        <Link key={project.id} href={`project/${project.id}`}>
                            <ProjectImage img={project.imagem} alt={project.titulo} />
                        </Link>
                    );
                })}
            </div>
        </main>
        <Footer buttonTitle='Voltar para o topo' paginationLink='/home'/></>
    )
}