import { useRouter } from 'next/router';
import data from '../../data.json';
import styles from './index.module.css';
import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { ProjectImage } from '@/components/ProjectImage';


export default function Project() {
  const { query } = useRouter();
  const projectId = Number(query.id);
  const projectIndex = data.findIndex((d) => d.id === projectId);
  const nextProjectId =
    projectIndex < data.length - 1 ? data[projectIndex + 1].id : null;

  const project = data.find((d) => d.id === projectId);

  return (
    <>
      <Button title="Voltar ao inicio" href={'../'} />
      
      <h2 className={styles.projectName}>{project?.titulo}</h2>
      <div className={styles.project}>
              <span className={styles.skin}>
              {project?.ferramentas}
       </span>
              <div className={styles.img}>
                  <ProjectImage img={`${project?.imagem}`} alt={`${project?.titulo}`} />
              </div>
              <span>
        {project?.descricao}
              </span>      
      </div>
      {nextProjectId !== null && (
        <Footer
          buttonTitle="Ver próximo projeto."
          paginationLink={`/project/${nextProjectId}`}
        />
      )}
    </>
  );
}
