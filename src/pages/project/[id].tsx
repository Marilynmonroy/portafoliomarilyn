import { useRouter } from "next/router";
import data from "../../data.json";
import styles from "./index.module.css";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { ProjectImage } from "@/components/ProjectImage";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Project() {
  const { query } = useRouter();
  const project = data.find((project) => project.id === Number(query.id));
  const nextProject = data.find(
    (project) => project.id === Number(query.id) + 1
  );

  return (
    <>
      <Link className={styles.button} href={"/"}>
        <Button title="Voltar ao inicio" />
      </Link>

      <h2 className={styles.projectName}>{project?.titulo}</h2>
      <div className={styles.project}>
        <span className={styles.skin}>{project?.ferramentas}</span>
        <div className={styles.img}>
          <ProjectImage img={`${project?.imagem}`} alt={`${project?.titulo}`} />
        </div>
        <span>{project?.descricao}</span>
      </div>

      <Footer
        buttonTitle="Ver próximo projeto"
        paginationLink={`${nextProject?.id || "1"}`}
        icon={<AiOutlineArrowRight />}
      />
    </>
  );
}
