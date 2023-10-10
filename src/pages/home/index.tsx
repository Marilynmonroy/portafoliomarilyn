import data from "../../data.json";
import styles from "./index.module.css";
import Link from "next/link";
import { ProjectImage } from "@/components/ProjectImage";
import { Footer } from "@/components/Footer";
import { AiOutlineArrowUp } from "react-icons/ai";
import { SideBar } from "@/components/SideBar";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <SideBar />
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
      <Footer
        buttonTitle="Voltar para o topo"
        paginationLink="/home"
        icon={<AiOutlineArrowUp />}
      />
    </>
  );
}
