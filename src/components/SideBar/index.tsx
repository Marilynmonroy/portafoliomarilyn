import { Button } from "../Button";
import { ExternalLink } from "../ExternalLink";
import { Profile } from "../Profile";
import { Tittle } from "../Tittle";
import { WorkExperience } from "../WorkExperience";
import styles from "./index.module.css";

export function SideBar() {
  const DownloadCv = () => {
    const link = document.createElement("a");
    link.href = "/MarilynAragon.cv (2).pdf";
    link.download = "MarilynAragon.pdf";
    link.click();
  };

  return (
    <div className={styles.profile}>
      <Profile />
      <div className={styles.personalDescription}>
        <Tittle tittle="Designer e desenvolvedora" />
        <span>
          Olá! Sou uma profissional de línguas modernas com um forte interesse
          em comunicação e design digital. Minhas habilidades estão centradas no
          processo criativo e na criação de conteúdo para plataformas digitais,
          assim como na construção de identidades visuais e no desenvolvimento
          de branding pessoal.
        </span>
      </div>

      <div className={styles.socialMedia}>
        <ExternalLink
          link="https://www.linkedin.com/in/marilyn-arag%C3%B3n-monroy-723a201b3/"
          title="Linkedin"
        />
        <ExternalLink link="https://github.com/Marilynmonroy" title="GitHub" />
        <ExternalLink
          link="https://www.behance.net/Marilyn_monroy"
          title="Behance"
        />
      </div>
      <Tittle tittle="Expêriencia" />
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

      <Button title="Baixar currículo" onClick={DownloadCv} />
    </div>
  );
}
